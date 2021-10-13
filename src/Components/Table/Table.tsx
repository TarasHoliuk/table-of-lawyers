import React from 'react';
import { ValidatedLawyer } from '../../types/ValidatedLawyer';

interface Props {
  records: ValidatedLawyer[];
}

export const Table: React.FC<Props> = React.memo(
  (props) => {
    const { records } = props;

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
          {records.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td
                className={row.fullName.isValid ? '' : 'has-background-danger'}
                title={row.fullName.errorMessage}
              >
                {row.fullName.value}
              </td>
              <td
                className={row.phone.isValid ? '' : 'has-background-danger'}
                title={row.phone.value}
              >
                {row.phone.value}
              </td>
              <td
                className={row.email.isValid ? '' : 'has-background-danger'}
                title={row.email.value}
              >
                {row.email.value}
              </td>
              <td
                className={row.age.isValid ? '' : 'has-background-danger'}
                title={row.age.errorMessage}
              >
                {row.age.value}
              </td>
              <td
                className={row.experience.isValid ? '' : 'has-background-danger'}
                title={row.experience.errorMessage}
              >
                {row.experience.value}
              </td>
              <td
                className={row.yearlyIncome.isValid ? '' : 'has-background-danger'}
                title={row.yearlyIncome.errorMessage}
              >
                {row.yearlyIncome.value}
              </td>
              <td
                className={row.hasChildren.isValid ? '' : 'has-background-danger'}
                title={row.hasChildren.errorMessage}
              >
                {typeof row.hasChildren.value === 'string'
                  ? row.hasChildren.value
                  : row.hasChildren.value
                    ? 'TRUE'
                    : 'FALSE'}
              </td>
              <td
                className={row.licenseStates.isValid ? '' : 'has-background-danger'}
                title={row.licenseStates.errorMessage}
              >
                {row.licenseStates.value}
              </td>
              <td
                className={row.expirationDate.isValid ? '' : 'has-background-danger'}
                title={row.expirationDate.errorMessage}
              >
                {row.expirationDate.value}
              </td>
              <td
                className={row.licenseNumber.isValid ? '' : 'has-background-danger'}
                title={row.licenseNumber.errorMessage}
              >
                {row.licenseNumber.value}
              </td>
              <td className={row.duplicatedWith ? 'has-background-danger' : ''}>
                {row.duplicatedWith}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
);
