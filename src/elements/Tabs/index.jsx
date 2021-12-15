import { useState } from "react";

function Tabs({ pageContent }) {
  // First tab is always default
  const [selectTab, setSelectTab] = useState(pageContent[0].name);

  const selectedAccountTabs = (page) => {
    setSelectTab(page);
  };

  return (
    <>
      <ul className="tabs">
        {pageContent.length !== 0 &&
          pageContent.map((page) => {
            const { name } = page;
            return (
              <li
                key={name}
                className={`tab ${selectTab === name ? "active" : ""}`}
                onClick={() => {
                  selectedAccountTabs(name);
                }}
              >
                {name}
              </li>
            );
          })}
      </ul>

      {pageContent.map((page) => {
        const { name, content } = page;
        return (
          <div className="tabs-content" key={name}>
            {name === selectTab ? content() : null}
          </div>
        );
      })}
    </>
  );
}

export default Tabs;
