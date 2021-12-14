import { Link } from "react-router-dom";

// Assets
import logo from "../../assets/logo.svg";
import "./Styled";

function Sidebar() {
  return (
    <Sidebar className="col s2">
      <img
        src={logo}
        style={{ height: "40px" }}
        className="App-logo"
        alt="logo"
      />
      <Link to="/home">Home</Link>
      <Link to="/account">Account</Link>
    </Sidebar>
  );
}

export default Sidebar;
