import React, { RefObject, useState } from 'react';

interface Props {
  setFileData: React.Dispatch<React.SetStateAction<string>>;
}

export const FileUploader: React.FC<Props> = React.memo(
  (props) => {
    const [isChanged, setIsChanged] = useState(false);
    const inputRef: RefObject<HTMLInputElement> = React.createRef();
    const { setFileData } = props;

    const uploadFile = (input: React.RefObject<HTMLInputElement>) => {
      if (input.current?.files) {
        const file = input.current.files[0];
        const reader = new FileReader();

        reader.onload = (progressEvent) => {
          const csvString = progressEvent.target?.result as string;
          setFileData(csvString);
        };

        reader.readAsText(file);
      }
    };

    return (
      <>
        <input
          ref={inputRef}
          type="file"
          accept=".csv"
          onChange={() => setIsChanged(true)}
        />

        <button
          type="button"
          onClick={() => uploadFile(inputRef)}
          disabled={!isChanged}
        >
          Parse data
        </button>
      </>
    );
  },
);
