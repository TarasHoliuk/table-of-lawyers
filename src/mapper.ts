import { CellData } from './types/CellData';
import { NormalizedRecord } from './types/NormalizedRecord';

function toCamelCase(string: string) {
  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) {
      return '';
    }
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

const normalizeHeaders = (headers: string[]) => {
  const normalizedHeaders = headers.map(header => toCamelCase(header));
  normalizedHeaders.unshift('id');
  normalizedHeaders.push('duplicateWith');

  return normalizedHeaders;
};

const objectify = (headers: string[], records: CellData[][]) => {
  return records.map(lawyer => {
    const normalizedRecord = lawyer.reduce<NormalizedRecord>((acc, field, index) => {
      const key = headers[index] as keyof NormalizedRecord;

      Object.assign(acc, { [key]: field });

      return acc;
    }, {} as NormalizedRecord);

    return normalizedRecord;
  });
};

export const mapper = (headers: string[], data: CellData[][]) => {
  const normalizedHeaders = normalizeHeaders(headers);

  let idCounter = 1;
  const normalizedRecords = data.map(lawyer => {
    const mappedLawyer = lawyer.map(field => {
      if (typeof field === 'string') {
        field.trim();
      }

      return field;
    });

    mappedLawyer.unshift(idCounter);
    mappedLawyer.push(null);
    idCounter += 1;

    return mappedLawyer;
  });

  return objectify(normalizedHeaders, normalizedRecords);
};
