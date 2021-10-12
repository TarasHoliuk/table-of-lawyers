import React, { useState } from 'react';
import { parser } from '../../parser';
import { LawyerData } from '../../types/lawyerData';

interface Props {
  setParsedData: React.Dispatch<React.SetStateAction<LawyerData[]>>;
}

export const FileUploader: React.FC<Props> = (props) => {
  const { setParsedData } = props;
  // const [fileData, setFileData] = useState('');
  const [file, setFile] = useState<File>();

  const parseData = (data: string) => {
    console.log('parsing');
    const parsingResult = parser(data);
    setParsedData(parsingResult);
    console.log('parsed');
  };

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target?.files) {
      // setFile(event.target.files[0]);
      const reader = new FileReader();

      reader.onload = (progressEvent) => {
        const csvString = progressEvent.target?.result as string;
        parseData(csvString);
      };

      if (event.target.files[0]) {
        reader.readAsText(event.target.files[0]);
      }
    }
  };

  return (
    <>
      <div className="file is-info has-name">
        <label className="file-label">
          <input
            type="file"
            accept=".csv"
            className="file-input"
            onChange={(event) => uploadFile(event)}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
              CSV file...
            </span>
          </span>
          <span className="file-name">
            {file ? `${file.name}` : 'Choose the file'}
          </span>
        </label>
      </div>

      <button
        type="button"
        className="button is-info"
        // onClick={() => parseData(fileData)}
        disabled={!file}
      >
        Parse data
      </button>
    </>
  );
};
