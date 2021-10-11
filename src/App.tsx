import React, { useEffect, useState } from 'react';
import './App.scss';
import { FileUploader } from './Components/FileUploader/FileUploader';
import { Table } from './Components/Table/Table';
import { validator } from './Components/validator';
import { parser } from './parser';
import { LawyerData } from './types/lawyerData';
import { ValidatedLawyer } from './types/validatedLawyer';

export const App: React.FC = () => {
  const [fileData, setFileData] = useState('');
  const [parsedData, setParsedData] = useState<LawyerData[]>([]);
  const [validatedData, setValidatedData] = useState<ValidatedLawyer[]>([]);
  const [globalError, setGlobalError] = useState(false);

  useEffect(() => {
    setParsedData(parser(fileData));
  }, [fileData]);

  const showTable = () => {
    setGlobalError(false);
    setValidatedData(validator(parsedData, setGlobalError));
  };

  return (
    <>
      <div className="App">
        <FileUploader setFileData={setFileData} />
      </div>

      <button
        type="button"
        onClick={() => showTable()}
        disabled={parsedData.length <= 0}
      >
        Show Table
      </button>

      {globalError
        ? <div>File is invalid</div>
        : validatedData.length > 0 && <Table validatedData={validatedData} />}
    </>
  );
};
