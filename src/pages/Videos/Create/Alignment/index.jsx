import { useState } from "react";

import { SecondaryButton } from "../../../../elements/Button";

import { AlignmentWrapper } from "./styles";

function Alignment() {
  const [selectedAlignment, setSelectedAlignment] = useState("Center");
  const listOfButtons = ["Left", "Center", "Right"];
  return (
    <AlignmentWrapper>
      {listOfButtons.map((button) => {
        return (
          <SecondaryButton
            className={`${selectedAlignment === button ? "active" : ""}`}
            onClick={() => setSelectedAlignment(button)}
          >
            {button}
          </SecondaryButton>
        );
      })}
    </AlignmentWrapper>
  );
}

export default Alignment;
