import { Navigate, Link } from "react-router-dom";

// Pages
import Profile from "./Profile";
import Plan from "./Plan";
import Billing from "./Billing";

// Components
import Header from "../../components/Header";

// Elements
import Tabs from "../../elements/Tabs";

// Style
import { AccountWrapper } from "./styles";

function Account() {
  const pageHeaderDetails = {
    pageTitle: "My Account",
    buttonsHeader: () => (
      <Link to="/login" onClick={logOut}>
        Logout
      </Link>
    ),
  };

  const pages = [
    { name: "Profile", content: () => <Profile /> },
    { name: "My Plan", content: () => <Plan /> },
    { name: "Billing", content: () => <Billing /> },
  ];

  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
    <Navigate to="/login" />;
  };
  return (
    <AccountWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      {sessionStorage.getItem("token") !== "sm4rtcow" ? (
        <Navigate to="/login" />
      ) : (
        <Tabs pageContent={pages} />
      )}
    </AccountWrapper>
  );
}

export default Account;
