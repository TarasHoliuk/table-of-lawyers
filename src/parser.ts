import Papa from 'papaparse';
import { LawyerData } from './types/lawyerData';

const header = 'Full Name,Phone,Email,Age,Experience,Yearly Income,Has children,License states,Expiration date,License number\r\n';

const parseConfig = {
  header: true,
  dynamicTyping: true,
};

export const parser = (data: string) => {
  const parseResult = data.toLowerCase().includes(header.toLowerCase())
    ? Papa.parse(data, parseConfig)
    : Papa.parse((header + data), parseConfig);

  return parseResult.data as LawyerData[];
};
