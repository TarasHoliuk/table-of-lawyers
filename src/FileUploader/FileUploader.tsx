import React from 'react';

export const FileUploader: React.FC = () => {
  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      // eslint-disable-next-line no-console
      console.log(e.target?.result);
    };

    reader.readAsText(file);
  };

  return (
    <form>
      <input
        type="file"
        accept=".csv"
        onChange={(event) => uploadFile(event)}
      />
    </form>
  );
};
