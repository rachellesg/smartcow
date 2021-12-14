// Pages
import Profile from "./Profile";
import Plan from "./Plan";
import Billing from "./Billing";

// Elements
import Tabs from "../../elements/Tabs";

// Style
import { AccountWrapper } from "./styles";

function Account() {
  const pages = [
    { name: "Profile", content: () => <Profile /> },
    { name: "My Plan", content: () => <Plan /> },
    { name: "Billing", content: () => <Billing /> },
  ];
  return (
    <AccountWrapper>
      <Tabs pages={pages} />
    </AccountWrapper>
  );
}

export default Account;
