import styled from "styled-components";

export const AccountWrapper = styled.div`
  /* overwrite materialize css, specifically for tabs in account only */
  .tabs {
    margin-bottom: 45px;
    height: auto !important;
    .tab {
      text-align: left;
      text-transform: none;
      flex-grow: 0;
      min-width: 80px;
      font-size: 15px;
      font-weight: 500;
      line-height: 23px;
      text-align: left;
      height: auto !important;
      color: #999999;
      cursor: pointer;
      &:hover {
        color: #3860ad;
      }
      &.active {
        color: #3860ad;
      }
    }
  }
`;
