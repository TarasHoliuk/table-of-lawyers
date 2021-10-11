import React, { useState } from 'react';
import Papa from 'papaparse';
import './App.scss';
import { FileUploader } from './Components/FileUploader/FileUploader';
import { DataContext } from './Context/DataContext';
import { Table } from './Components/Table/Table';
import { LawyerData } from './types/lawyerData';

export const App: React.FC = () => {
  const [fileData, setFileData] = useState('');
  const header = 'Full Name,Phone,Email,Age,Experience,Yearly Income,Has children,License states,Expiration date,License number\r\n';
  const [parsedData, setParsedData] = useState<LawyerData[]>([]);

  const cur = new Date().toDateString();
  const str1for = '2021-12-28';
  const str2for = '12/28/2021';
  const res1 = Date.parse(cur) - Date.parse(str1for);
  const res2 = Date.parse(cur) - Date.parse(str2for);

  console.log(res1);
  console.log(res2);

  const parseConfig = {
    header: true,
    dynamicTyping: true,
  };

  const parseData = (data: string) => {
    const parseResult = fileData.toLowerCase().includes(header.toLowerCase())
      ? Papa.parse(data, parseConfig)
      : Papa.parse((header + data), parseConfig);

    setParsedData(parseResult.data as LawyerData[]);
  };

  return (
    <DataContext.Provider value={fileData}>
      <div className="App">
        <FileUploader setFileData={setFileData} />
      </div>
      <button
        type="button"
        onClick={() => parseData(fileData)}
        disabled={fileData.length <= 0}
      >
        Parse
      </button>
      {parsedData.length > 0 && <Table parsedData={parsedData} />}
    </DataContext.Provider>
  );
};
