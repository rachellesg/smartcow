import { Link, NavLink } from "react-router-dom";
import { SidebarWrapper } from "./styles";

// Assets
import logo from "../../assets/logo.svg";
import account from "../../assets/sidebar_account.svg";
import CreateVideoIcon from "../../assets/Icons/CreateVideo";
import SavedVideoIcon from "../../assets/Icons/SavedVideo";

function Sidebar() {
  return (
    <SidebarWrapper>
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
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/videos/create"
          >
            <CreateVideoIcon />
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/videos/saved"
          >
            <SavedVideoIcon />
          </NavLink>
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
