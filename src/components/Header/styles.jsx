import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: relative;
  padding: 10px 0 30px 0;
  margin-bottom: 30px;
  min-height: 77px;

  &:after {
    background: #000000;
    opacity: 0.1;
    width: 100%;
    height: 1px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
