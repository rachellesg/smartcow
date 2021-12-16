import PDFIcon from "../../assets/Icons/PDF";

import { TableWrapper } from "./styles";

function Table({ headers, data }) {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {headers !== 0 &&
            headers.map((item) => {
              return <td key={item}>{item}</td>;
            })}
        </tr>
      </thead>
      <tbody>
        {data !== 0 &&
          data.map((item) => {
            const { id, date, amount, invoice } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{date}</td>
                <td>${amount}</td>
                <td>
                  <a href={invoice} target="_blank">
                    <PDFIcon fill="#222222" />
                  </a>
                </td>
              </tr>
            );
          })}
      </tbody>
    </TableWrapper>
  );
}

export default Table;
