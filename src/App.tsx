import React, { useState } from 'react';
import './App.scss';
import { FileUploader } from './Components/FileUploader/FileUploader';
import { Table } from './Components/Table/Table';
import { validator, INVALID_DATA } from './Components/validator';
import { headersValidator, INVALID_HEADERS } from './FieldsValidators/headersValidator';
import { mapper } from './mapper';
import { parser } from './parser';
import { ValidatedLawyer } from './types/ValidatedLawyer';

export const App: React.FC = () => {
  const [lawyers, setLawyers] = useState<ValidatedLawyer[]>([]);
  const [globalError, setGlobalError] = useState(false);
  const [errorsAmount, setErrorsAmount] = useState(0);
  const [headersError, setHeadersError] = useState(false);

  const onUpload = (csvString: string) => {
    const { headers, records } = parser(csvString);
    const normalizedRecord = mapper(headers, records);

    try {
      headersValidator(Object.keys(normalizedRecord));
      setGlobalError(false);
    } catch (error) {
      if (error === INVALID_HEADERS) {
        setHeadersError(true);
        setGlobalError(true);
      } else {
        throw error;
      }
    }

    try {
      const { validatedData, errorsCounter } = validator(normalizedRecord);
      setErrorsAmount(errorsCounter);
      setGlobalError(false);
      setLawyers(validatedData);
    } catch (error) {
      if (error === INVALID_DATA) {
        setGlobalError(true);
      } else {
        throw error;
      }
    }
  };

  return (
    <>
      <div className="App">
        <FileUploader uploadHandler={onUpload} />
      </div>

      {errorsAmount && <span>{`Number of errors: ${errorsAmount}`}</span>}

      {globalError
        ? <div>{headersError ? INVALID_HEADERS : INVALID_DATA}</div>
        : lawyers.length > 0 && <Table records={lawyers} />}
    </>
  );
};
