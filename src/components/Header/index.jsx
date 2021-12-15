function Header({ pageHeaderDetails }) {
  console.log(pageHeaderDetails);
  const { pageTitle, buttonsHeader } = pageHeaderDetails;
  return (
    <div className="header">
      <h1>{pageTitle}</h1> / {buttonsHeader()}
    </div>
  );
}

export default Header;
