import React from 'react';
import { ValidatedLawyer } from '../../types/validatedLawyer';

interface Props {
  validatedData: ValidatedLawyer[];
}

export const Table: React.FC<Props> = React.memo(
  (props) => {
    const { validatedData } = props;

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Experience</th>
            <th>Yearly Income</th>
            <th>Has children</th>
            <th>License states</th>
            <th>Expiration date</th>
            <th>License number</th>
            <th>Duplicated with</th>
          </tr>
        </thead>
        <tbody>
          {validatedData.map((row) => (
            <tr key={row.ID}>
              <td>{row.ID}</td>
              <td>{row['Full Name'].value}</td>
              <td>{row.Phone.value}</td>
              <td>{row.Email.value}</td>
              <td>{row.Age.value}</td>
              <td>{row.Experience.value}</td>
              <td>{row['Yearly Income'].value}</td>
              <td>{row['Has children'].value}</td>
              <td>{row['License states'].value}</td>
              <td>{row['Expiration date'].value}</td>
              <td>{row['License number'].value}</td>
              <td>{row['Duplicated with']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
);
