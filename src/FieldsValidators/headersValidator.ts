const standardHeaders = [
  'id',
  'fullName',
  'phone',
  'email',
  'age',
  'experience',
  'yearlyIncome',
  'hasChildren',
  'licenseStates',
  'expirationDate',
  'licenseNumber',
  'duplicateWith',
];

export const INVALID_HEADERS = 'Table headers is not valid';

export const headersValidator = (headers: string[]) => {
  console.log(headers);

  const isValidHeaders = headers.every(header => standardHeaders.includes(header));

  if (!isValidHeaders) {
    throw new Error(INVALID_HEADERS);
  }
};
