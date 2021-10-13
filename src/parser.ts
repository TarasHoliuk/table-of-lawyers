import Papa from 'papaparse';
import { CellData } from './types/CellData';

const parseConfig = {
  dynamicTyping: true,
};

export const parser = (fileData: string) => {
  const parseResult = Papa.parse<CellData[]>(fileData, parseConfig).data;

  const headers = parseResult.shift() as string[];

  return { headers, records: parseResult };
};
