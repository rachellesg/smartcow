import { Link } from "react-router-dom";
import { SidebarWrapper } from "./styles";

// Assets
import logo from "../../assets/logo.svg";
import createVideos from "../../assets/sidebar_videos-create.svg";
import savedVideos from "../../assets/sidebar_videos-saved.svg";
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
          <Link to="/videos/create">
            <img src={createVideos} />
          </Link>
          <Link to="/videos/saved">
            <img src={savedVideos} />
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
