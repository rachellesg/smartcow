import styled from "styled-components";

export const VideoCardWrapper = styled.div`
  background: #f4f4f4;
  border-radius: 6px;
  padding: 5px 5px 10px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .action {
      position: absolute;
      top: 5px;
      right: 10px;
      color: #666666;
    }
    .image {
      img {
        max-width: 100%;
      }
    }
    .title {
      margin: 10px 0;
      font-size: 16px;
    }
    .tags {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 1 33%;
      flex-wrap: wrap;
      .tag {
        color: #999999;
        font-size: 12px;
        background: #f4f4f4;
        border-radius: 6px;
        padding: 2px 8px;
        border: 1px solid #999999;
        margin-right: 5px;
        margin-bottom: 5px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
