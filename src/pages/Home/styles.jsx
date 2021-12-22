import styled from "styled-components";

import BackgroundImage from "../../assets/background.svg";

export const HomeWrapper = styled.div`
  .fullwidth-background {
    background: url(${BackgroundImage}) no-repeat top right;
    position: absolute;
    top: 0;
    right: 0;
    width: 100vh;
    height: 100vh;
    z-index: -50;
  }
  .header {
    &:after {
      height: 0;
      background: transparent;
    }
  }
  .register-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 80px;
    z-index: 50;
    .label {
      display: flex;
      font-size: 13px;
      line-height: 19px;
      justify-content: space-between;
      label {
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */

        color: #000000;
      }
      .forgot-password {
        text-align: right;

        color: #3860ad;
      }
    }
    input[type="text"],
    input[type="password"] {
      border: 1px solid #999999;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 0 15px;
      &:focus {
        border: 1px solid #5c90f3;
        box-shadow: none;
      }
    }
    .col {
      margin-bottom: 20px;
      margin-left: auto;
      margin-right: auto;
    }
    .sign-up {
      margin-top: 80px;
    }
  }
`;
