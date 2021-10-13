import React, { useState } from 'react';

interface Props {
  uploadHandler: (csvFileString: string) => void;
}

export const FileUploader: React.FC<Props> = (props) => {
  const { uploadHandler } = props;

  const [file, setFile] = useState<File>();

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target?.files) {
      setFile(event.target.files[0]);
      const reader = new FileReader();

      reader.onload = (progressEvent) => {
        const csvString = progressEvent.target?.result as string;
        uploadHandler(csvString);
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
    </>
  );
};
