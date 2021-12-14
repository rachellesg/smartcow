import { useState } from "react";

function Tabs(pages) {
  const [selectTab, setSelectTab] = useState(pages.pages[1].name);
  const pageContent = pages.pages;

  const selectedAccountTabs = (page) => {
    setSelectTab(page);
  };

  return (
    <>
      <ul className="tabs">
        {pageContent.map((page) => {
          return (
            <>
              <li
                key={page.name}
                className={`tab ${selectTab === page ? "active" : ""}`}
                onClick={() => {
                  selectedAccountTabs(page.name);
                }}
              >
                {page.name}
              </li>
            </>
          );
        })}
      </ul>

      {pageContent.map((page) => {
        return (
          <div className="tabs-content" key={page.name}>
            {selectTab === page.name ? page.content : ""}
          </div>
        );
      })}
    </>
  );
}

export default Tabs;
