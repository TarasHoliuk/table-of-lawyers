import React, { useEffect, useState } from 'react';

export const FileUploader: React.FC = () => {
  const [dataArray, setDataArray] = useState<string[][]>([]);
  let string = '';

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = (e) => {
        string = e.target?.result as string;
      };

      reader.readAsText(file);
    }
  };

  useEffect(() => {
    setDataArray(string.split('\n').map(row => row.split(',')));
    console.log(dataArray);
  }, [string]);

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
