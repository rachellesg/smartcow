// Components
import Header from "../../components/Header";

import { PrimaryButton, SecondaryButton } from "../../elements/Button";

function Videos() {
  const pageHeaderDetails = {
    pageTitle: "Editable Header Videos",
    buttonsHeader: () => <PrimaryButton>Save</PrimaryButton>,
    cancelButton: () => <SecondaryButton>Cancel</SecondaryButton>,
  };
  return (
    <>
      <Header pageHeaderDetails={pageHeaderDetails} />
      My Videos xxx
    </>
  );
}

export default Videos;
