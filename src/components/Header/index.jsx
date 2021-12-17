import { HeaderWrapper } from "./styles";

function Header({ pageHeaderDetails }) {
  console.log(pageHeaderDetails);
  const { pageTitle, buttonsHeader } = pageHeaderDetails;
  return (
    <HeaderWrapper className="header">
      <h1>{pageTitle}</h1> {buttonsHeader ? buttonsHeader() : ""}
    </HeaderWrapper>
  );
}

export default Header;
