import styled from "styled-components";

export const AccountWrapper = styled.div`
  /* overwrite materialize css, specifically for tabs in account only */
  .tabs {
    .tab {
      text-align: left;
      text-transform: none;
      flex-grow: 0;
      min-width: 100px;
      &.active {
        color: blue;
      }
    }
  }
`;
