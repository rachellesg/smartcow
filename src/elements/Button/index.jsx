import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  min-width: 120px;
  padding: 8px 20px;
  border: 0;
  outline: none;
`;

export const PrimaryButton = styled(Button)`
  background: rgb(99 169 76);
  color: #ffffff;
  font-weight: bold;
`;
