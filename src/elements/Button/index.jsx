import styled from "styled-components";

export const Button = styled.button`
  border-radius: 6px;
  font-weight: 600;
  min-width: 120px;
  padding: 8px 20px;
  border: 0;
  outline: none;
  line-height: 21px;
`;

export const PrimaryButton = styled(Button)`
  background: rgb(99 169 76);
  color: #ffffff;
  a {
    color: #ffffff;
  }
`;

export const SecondaryButton = styled(Button)`
  background: #f1f1f1;
  font-size: 14px;
  color: #999999;
  a {
    color: #999999;
  }
`;
