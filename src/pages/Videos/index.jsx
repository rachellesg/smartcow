import { Link } from "react-router-dom";

// Components
import Header from "../../components/Header";

// Elements
import Tabs from "../../elements/Tabs";
import { PrimaryButton, SecondaryButton } from "../../elements/Button";

function Videos() {
  const pageHeaderDetails = {
    pageTitle: "Editable Header Videos",
    isEditable: true,
    buttonsHeader: () => <PrimaryButton>Save</PrimaryButton>,
    cancelButton: () => (
      <SecondaryButton>
        <Link to="/videos/saved">Cancel</Link>
      </SecondaryButton>
    ),
  };
  const editableHeaderOnClick = () => {};

  const pages = [
    { name: "Actor", content: () => "Hello" },
    { name: "Voice", content: () => "Wut" },
    { name: "Alignment", content: () => "Yar" },
    { name: "Background", content: () => "Yar" },
  ];
  return (
    <VideoWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      <div className="row">
        <div className="col s12 l6">VIDEO</div>
        <div className="col s12 l6">
          <Tabs pageContent={pages} />
        </div>
      </div>
    </VideoWrapper>
  );
}

export default Videos;
