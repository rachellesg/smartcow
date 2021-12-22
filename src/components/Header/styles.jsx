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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  &.header-editable {
    h1 {
      svg {
        transform: rotate(180deg);
        color: #000000;
        margin-left: 20px;
      }
      &.header-modal {
        &:after {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          background: rgb(255, 255, 255, 0.9);
          width: 100vw;
          height: 100vh;
          z-index: 5;
        }
      }

      .input {
        position: relative;
        z-index: 10;
        textarea {
          font-size: 15px;
          line-height: 22px;
          color: #666666;
          border-top: 0;
          border-left: 0;
          border-right: 0;
          padding: 15px 0;
          width: 500px;
          height: 65px;
          max-height: 65px;
          max-width: 500px;
        }
        input[type="text"] {
          width: 350px;
          font-size: 22px;
          line-height: 33px;
          font-weight: 500;

          color: #3860ad;
          border: 0;
          &:focus {
            box-shadow: 0 1px 0 0 #b3caf7;
          }
        }
        .tags {
          display: flex;
          justify-content: flex-start;
          align-items: start;
          flex: 0 1 33%;
          flex-wrap: wrap;
          margin: 20px 0;
          .tag {
            color: #999999;
            font-size: 14px;
            background: transparent;
            border-radius: 6px;
            padding: 3px 13px;
            border: 1px solid #999999;
            margin-right: 10px;
            margin-bottom: 5px;
            &:last-child {
              margin-right: 0;
            }
          }
        }
        button {
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }

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

  .actions {
    display: flex;

    button {
      margin-left: 20px;
    }
  }
`;
