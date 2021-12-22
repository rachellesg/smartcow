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
