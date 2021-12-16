import { Link } from "react-router-dom";
import { SidebarWrapper } from "./styles";

// Assets
import logo from "../../assets/logo.svg";
import account from "../../assets/sidebar_account.svg";

function Sidebar() {
  return (
    <SidebarWrapper className="col s12 l1">
      <div className="logo">
        <img
          src={logo}
          style={{ height: "40px" }}
          className="App-logo"
          alt="logo"
        />
      </div>
      <nav>
        <div className="nav-links">
          <Link to="/home">
            <svg
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6439 10.828V5.00402L25.5999 2.00802V13.824L20.6439 10.828ZM18.4319 15.308H1.9119C1.0719 15.308 0.399902 14.664 0.399902 13.852V2.14802C0.399902 1.33602 1.0719 0.692017 1.9119 0.692017H18.4319C19.2719 0.692017 19.9439 1.33602 19.9439 2.14802V13.824C19.9439 14.664 19.2719 15.308 18.4319 15.308ZM16.9199 3.80002C16.9199 3.49202 16.6679 3.24002 16.3599 3.24002H13.1119C12.8039 3.24002 12.5519 3.49202 12.5519 3.80002V4.36002C12.5519 4.66802 12.8039 4.92002 13.1119 4.92002H16.3319C16.6399 4.92002 16.8919 4.66802 16.8919 4.36002V3.80002H16.9199Z"
                fill="#999999"
              />
            </svg>
          </Link>
          <Link to="/account">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.04 1.44798C22.04 0.743978 21.336 0.039978 20.632 0.039978H9.36796C8.66396 0.039978 7.95996 0.743978 7.95996 1.44798V1.79998H22.04V1.44798Z"
                fill="#999999"
              />
              <path
                d="M25.5599 4.968C25.5599 4.264 24.8559 3.56 24.1519 3.56H5.84794C5.14394 3.56 4.43994 4.264 4.43994 4.968V5.32H25.5599V4.968Z"
                fill="#999999"
              />
              <path
                d="M11.48 23.976L20.28 18.52L11.48 13.064V23.976Z"
                fill="#999999"
              />
              <path
                d="M25.2079 7.07996H4.61592C2.67992 7.07996 0.919922 8.83996 0.919922 10.776V26.264C0.919922 28.2 2.67992 29.96 4.61592 29.96H25.3839C27.3199 29.96 29.0799 28.2 29.0799 26.088V10.776C29.0799 8.83996 27.3199 7.07996 25.2079 7.07996ZM27.1439 10.776V26.264C27.1439 27.32 26.2639 28.2 25.2084 28.2H4.61592C3.55992 28.2 2.67992 27.32 2.67992 26.088V10.776C2.67992 9.71996 3.55992 8.83996 4.61592 8.83996H25.3839C26.4399 8.83996 27.3199 9.71996 27.1439 10.776Z"
                fill="#999999"
              />
            </svg>
          </Link>
        </div>
        <div className="account">
          <Link to="/account">
            <img src={account} style={{ height: "40px" }} alt="Account" />
          </Link>
        </div>
      </nav>
    </SidebarWrapper>
  );
}

export default Sidebar;
