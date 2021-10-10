import React from 'react';
import { LawyerData } from '../../types/lawyerData';

interface Props {
  parsedData: LawyerData[];
}

export const Table: React.FC<Props> = React.memo(
  (props) => {
    const { parsedData } = props;
    const header = Object.keys(parsedData[0]);

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            {header.map(columnName => (
              <th key={columnName}>{columnName}</th>
            ))}
            <th>Duplicate with</th>
          </tr>
        </thead>
        <tbody>
          {parsedData.map((row, index) => (
            <tr key={row['License number']}>
              <td>{index + 1}</td>
              <td>{row['Full Name']}</td>
              <td>{row.Phone}</td>
              <td>{row.Email}</td>
              <td>{row.Age}</td>
              <td>{row.Experience}</td>
              <td>{row['Yearly Income']}</td>
              <td>{row['Has children']}</td>
              <td>{row['License states']}</td>
              <td>{row['Expiration date']}</td>
              <td>{row['License number']}</td>
              <td>No duplicates</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
);
