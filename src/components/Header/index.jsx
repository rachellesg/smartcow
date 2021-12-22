import { useState } from "react";

import ChevronIcon from "../../assets/Icons/Chevron";
import { PrimaryButton } from "../../elements/Button";

import { HeaderWrapper } from "./styles";

function Header({ pageHeaderDetails }) {
  const { pageTitle, isEditable, buttonsHeader, cancelButton } =
    pageHeaderDetails;

  const [isEdit, setIsEdit] = useState(false);
  const [videoTitle, setVideoTitle] = useState(pageTitle);
  const editOnClick = () => {
    setIsEdit(!isEdit);
  };

  const handleSave = () => {
    setIsEdit(!isEdit);
  };
  return (
    <HeaderWrapper className={`header ${isEditable ? " header-editable" : ""}`}>
      {isEditable ? (
        <>
          <h1 className={`${isEdit ? "header-modal" : ""}`}>
            {isEdit ? (
              <div className="input">
                <input
                  type="text"
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                />
                <textarea>
                  Fusce quis magna vel ex pellentesque consequat sed et turpis.
                  Vivamus bibendum rutrum euismod. Sed non sagittis est, semper
                </textarea>
                <div className="tags">
                  <div className="tag">Email</div>
                  <div className="tag">Marketing</div>
                  <div className="tag">Greeting</div>
                </div>
                <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
              </div>
            ) : (
              <div onClick={editOnClick}>
                {videoTitle} <ChevronIcon />
              </div>
            )}
          </h1>
        </>
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
