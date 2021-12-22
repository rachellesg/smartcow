import styled from "styled-components";

export const ActorWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  flex: 1 1 33%;
  flex-wrap: wrap;
  .item {
    margin-right: 5px;
    margin-bottom: 15px;
    max-width: 31%;
    @media screen and (max-width: 413px) {
      margin-right: 5px;
    }
    cursor: pointer;
    &.active {
      .image {
        border: 1px solid #3860ad;
      }
      .name {
        color: #3860ad;
      }
    }
    @media screen and (min-width: 1025px) {
      &:nth-child(3n + 3) {
        margin-right: 0;
      }
    }
    .image {
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
      border-radius: 6px;
      max-width: 100%;
      height: 78px;
      img {
        max-width: 100%;
        border-radius: 6px;
        height: 76px;
      }
    }
    .name {
      margin-top: 3px;
      text-align: center;
    }
  }
`;
