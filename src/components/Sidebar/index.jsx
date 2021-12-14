import { Link } from "react-router-dom";
import { SidebarWrapper } from "./styles";

// Assets
import logo from "../../assets/logo.svg";

function Sidebar() {
  return (
    <SidebarWrapper className="col s2">
      <img
        src={logo}
        style={{ height: "40px" }}
        className="App-logo"
        alt="logo"
      />
      <Link to="/home">Home</Link>
      <Link to="/account">Account</Link>
    </SidebarWrapper>
  );
}

export default Sidebar;
