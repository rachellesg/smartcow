import styled from "styled-components";
import personOne from "../../../assets/Videos/person-1.svg";

export const CreateVideoWrapper = styled.div`
  background: #f4f4f4;
  border-radius: 20px;
  padding: 20px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .video {
      max-width: 100%;
      background-image: url(${personOne});
      background-size: cover;
      background-position: center;
      width: 700px;
      height: 400px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
    .video-script {
      background: #ffffff;
      border-radius: 20px;
      padding: 15px;
      width: 100%;
      textarea {
        font-size: 16px;
        line-height: 26px;
        border: 0;
        height: 100px;

        color: #999999;
        &:focus-visible {
          outline: none;
        }
      }
    }
  }
`;
