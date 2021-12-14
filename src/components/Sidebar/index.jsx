import { Link } from "react-router-dom";
import { SidebarWrapper } from "./styles";

// Assets
import logo from "../../assets/logo.svg";

function Sidebar() {
  return (
    <SidebarWrapper className="col s2">
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
          <Link to="/home">Home</Link>
          <Link to="/account">Saved</Link>
        </div>
        <div className="account">
          <Link to="/account">Account</Link>
        </div>
      </nav>
    </SidebarWrapper>
  );
}

export default Sidebar;
