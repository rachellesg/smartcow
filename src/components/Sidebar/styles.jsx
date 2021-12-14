import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
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
    box-shadow: 0;

    .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      a {
        color: #000000;
      }
    }
    .account {
      bottom: 0;
    }
  }
`;
