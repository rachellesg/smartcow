import styled from "styled-components";

export const TableWrapper = styled.table`
  thead {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    text-transform: uppercase;

    mix-blend-mode: normal;
    opacity: 0.5;
  }
  tbody {
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
  tr {
    /* Overwrite Materialize CSS default tr style */
    border-bottom: 0;
  }
`;
