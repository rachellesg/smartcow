import styled from "styled-components";

export const AppWrapper = styled.div`
  /* Header Styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 {
    font-size: 22px;
    font-weight: 500;
    text-align: left;
  }

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (min-width: 993px) {
    .sidebar {
      position: fixed;
      max-width: 100px;
      width: 100%;
    }
    .main-content {
      margin-left: 120px !important;
    }
  }
`;
