import styled from "styled-components";

export const InputFieldWrapper = styled.div`
  margin-top: 0;
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 10px;
    margin-top: 6px;
    height: 100%;
    max-height: 40px;
  }
  label {
    position: relative !important;
    font-size: 14px;
    color: #000000;
  }
`;
