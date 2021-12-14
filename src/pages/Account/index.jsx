import { useState } from "react";

// Pages

// Style
import { AccountWrapper } from "./styles";

function Account() {
  const [selectTab, setSelectTab] = useState("Profile");

  const pages = ["Profile", "Plan", "Billing"];

  const selectedAccountTabs = (page) => {
    console.log(page);
    setSelectTab(page);
  };
  return (
    <AccountWrapper>
      <ul className="tabs">
        {pages.map((page) => {
          return (
            <li
              key={page}
              className={`tab ${selectTab === page ? "active" : ""}`}
              onClick={() => {
                selectedAccountTabs(page);
              }}
            >
              {page}
            </li>
          );
        })}
      </ul>
      <div className="tabs-content">
        {selectTab === "Profile"
          ? "if hits profile"
          : selectTab === "Plan"
          ? "hits plan"
          : "others billing"}
      </div>
    </AccountWrapper>
  );
}

export default Account;
