import styled from "styled-components";

export const ActorWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  flex: 1 1 33%;
  flex-wrap: wrap;
  .item {
    margin-right: 11px;
    margin-bottom: 15px;
    cursor: pointer;
    &.active {
      .image {
        border: 1px solid #3860ad;
      }
      .name {
        color: #3860ad;
      }
    }
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
    .image {
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      border-radius: 6px;
      width: 150px;
      height: 85px;
      img {
        max-width: 100%;
      }
    }
    .name {
      margin-top: 3px;
      text-align: center;
    }
  }
`;
