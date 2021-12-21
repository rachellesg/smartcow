import styled from "styled-components";

export const AccordionWrapper = styled.div`
  .accordion-item {
    margin: 15px 0;
    &.active {
      background: #ebf2ff;
      border-radius: 6px;

      .accordion-title {
        color: #3860ad;
      }
    }
    .accordion-title {
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height */

      color: #999999;
      padding: 12px;
    }
    .accordion-content {
      padding: 12px;
    }
  }
`;
