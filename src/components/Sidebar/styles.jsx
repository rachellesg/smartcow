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

    .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      svg {
      }

      a {
        color: #000000;
        display: flex;
        align-items: center;
        margin: 25px 0;
      }
    }
    .account {
      bottom: 0;
    }
  }
`;
