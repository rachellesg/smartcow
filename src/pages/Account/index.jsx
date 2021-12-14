// Pages

// Elements
import Tabs from "../../elements/Tabs";

// Style
import { AccountWrapper } from "./styles";

function Account() {
  const pages = [
    { name: "Profile", content: "Profile XX" },
    { name: "My Plan", content: "Plan C" },
    { name: "Billing", content: "Billing NN" },
  ];
  return (
    <AccountWrapper>
      <Tabs pages={pages} />
    </AccountWrapper>
  );
}

export default Account;
