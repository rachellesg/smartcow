import { useState } from "react";

// Data props required
// const pages = [
//   { name: "Profile", content: "Profile XX" }
// ];

function Tabs(pages) {
  const pageContent = pages.pages;

  // First tab is always default
  const [selectTab, setSelectTab] = useState(pageContent[0].name);

  const selectedAccountTabs = (page) => {
    setSelectTab(page);
  };

  return (
    <>
      <ul className="tabs">
        {pageContent.length != 0 &&
          pageContent.map((page) => {
            return (
              <>
                <li
                  key={page.name}
                  className={`tab ${selectTab === page.name ? "active" : ""}`}
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
