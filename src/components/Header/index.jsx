import InputField from "../../elements/InputField";
import { HeaderWrapper } from "./styles";

function Header({ pageHeaderDetails }) {
  console.log(pageHeaderDetails);
  const { pageTitle, isEditable, buttonsHeader, cancelButton } =
    pageHeaderDetails;
  return (
    <HeaderWrapper className="header">
      {isEditable ? (
        <h1
          onClick={() => {
            console.log("let edit page title");
          }}
        >
          {pageTitle}
          {/* Chevron Icon here  */}
        </h1>
      ) : (
        <h1>{pageTitle}</h1>
      )}

      <div className="actions">
        {cancelButton ? cancelButton() : ""}{" "}
        {buttonsHeader ? buttonsHeader() : ""}
      </div>
    </HeaderWrapper>
  );
}

export default Header;
