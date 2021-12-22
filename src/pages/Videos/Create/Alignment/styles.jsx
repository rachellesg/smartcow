import styled from "styled-components";

export const AlignmentWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  button {
    min-width: 31%;
    box-sizing: border-box;
    &.active {
      background: #ebf2ff;
      border: 1px solid #3860ad;
      color: #3860ad;
    }
  }
`;
