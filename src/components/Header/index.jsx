import { HeaderWrapper } from "./styles";

function Header({ pageHeaderDetails }) {
  console.log(pageHeaderDetails);
  const { pageTitle, buttonsHeader, cancelButton } = pageHeaderDetails;
  return (
    <HeaderWrapper className="header">
      <h1>{pageTitle}</h1>
      <div className="actions">
        {cancelButton ? cancelButton() : ""}{" "}
        {buttonsHeader ? buttonsHeader() : ""}
      </div>
    </HeaderWrapper>
  );
}

export default Header;
