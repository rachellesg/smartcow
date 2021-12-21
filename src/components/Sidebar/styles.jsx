import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  margin: 0 !important;
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background: #000000;
    opacity: 0.1;
  }
  .logo {
    margin-bottom: 75px;
  }

  @media screen and (max-width: 768px) {
    &:after {
      width: 0;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80vh;

    /* overwrite materialize css */
    background: #ffffff;
    outline: none;
    border: 0;
    box-shadow: none;

    @media screen and (max-width: 768px) {
      height: 0;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 768px) {
        display: none;
      }

      a {
        color: #999999;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        &.active {
          background: #ebf2ff;
          svg {
            color: #3860ad;
          }
        }
        &:hover {
          background: #ebf2ff;
          svg {
            color: #3860ad;
          }
        }
      }
    }
    .account {
      bottom: 0;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;
