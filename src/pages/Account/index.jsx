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

const logOut = () => {
  localStorage.clear();
};

function Account() {
  const pageHeaderDetails = {
    pageTitle: "My Account",
    buttonsHeader: () => (
      <a onClick={logOut} href="#">
        Logout
      </a>
    ),
  };

  const pages = [
    { name: "Profile", content: () => <Profile /> },
    { name: "My Plan", content: () => <Plan /> },
    { name: "Billing", content: () => <Billing /> },
  ];

  return (
    <AccountWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      <Tabs pageContent={pages} />
    </AccountWrapper>
  );
}

export default Account;
