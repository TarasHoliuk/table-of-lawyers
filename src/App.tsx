import React from 'react';
import './App.scss';
import { FileUploader } from './FileUploader/FileUploader';

export const App: React.FC = () => {
  return (
    <div className="App">
      <FileUploader />
    </div>
  );
};
