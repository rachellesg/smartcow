import styled from "styled-components";

export const Button = styled.button`
  border-radius: 6px;
  font-weight: 600;
  min-width: 90px;
  padding: 8px 20px;
  border: 0;
  outline: none;
  line-height: 21px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background: #63a94c;
  color: #ffffff;
  &:focus,
  &:hover {
    background: #55963f;
    color: #ffffff;
  }
  a {
    color: #ffffff;
  }
`;

export const SecondaryButton = styled(Button)`
  background: #f1f1f1;
  color: #999999;
  font-size: 14px;
  &:focus,
  &:hover {
    background: #e8e8e8;
    color: #999999;
  }
  a {
    color: #999999;
  }
`;
