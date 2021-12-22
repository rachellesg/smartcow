import styled from "styled-components";

export const VideoWrapper = styled.div`
  .header {
    .actions {
      display: flex;
      @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column-reverse;

        position: fixed;
        bottom: 0;
        z-index: 2;
        padding: 20px;
        background: #ffffff;
      }

      button {
        margin-left: 20px;
        @media screen and (max-width: 768px) {
          margin-left: 0;
          margin-bottom: 10px;
          width: 100%;
        }
      }
    }
  }
`;
