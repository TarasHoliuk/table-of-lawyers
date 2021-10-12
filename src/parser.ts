import Papa from 'papaparse';
import { LawyerData } from './types/lawyerData';

const parseConfig = {
  header: true,
  dynamicTyping: true,
};

export const parser = (myData: string) => {
  const parseResult = Papa.parse(myData, parseConfig);

  return parseResult.data as LawyerData[];
};
