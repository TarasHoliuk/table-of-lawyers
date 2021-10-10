import React from 'react';

interface Props {
  setFileData: React.Dispatch<React.SetStateAction<string>>;
}

export const FileUploader: React.FC<Props> = React.memo(
  (props) => {
    const { setFileData } = props;

    const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (progressEvent) => {
          const stringFromFile = progressEvent.target?.result as string;

          setFileData(stringFromFile);
        };

        reader.readAsText(file);
      }
    };

    return (
      <input
        type="file"
        accept=".csv"
        onChange={(event) => uploadFile(event)}
      />
    );
  },
);
