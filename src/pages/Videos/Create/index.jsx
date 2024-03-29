import { Link } from "react-router-dom";

// Pages
import Actor from "./Actor";
import Voice from "./Voice";
import Alignment from "./Alignment";
import Background from "./Background";

// Components
import Header from "../../../components/Header";

// Elements
import Tabs from "../../../elements/Tabs";
import { PrimaryButton, SecondaryButton } from "../../../elements/Button";

// STyles
import { CreateVideoWrapper, TabsWrapper } from "./styles";
import { VideoWrapper } from "../styles";

function Videos() {
  const pageHeaderDetails = {
    pageTitle: "Saying hi to our customers",
    isEditable: true,
    buttonsHeader: () => <PrimaryButton>Save</PrimaryButton>,
    cancelButton: () => (
      <Link to="/videos/saved">
        <SecondaryButton>Cancel</SecondaryButton>
      </Link>
    ),
  };

  const pages = [
    { name: "Actor", content: () => <Actor /> },
    { name: "Voice", content: () => <Voice /> },
    { name: "Alignment", content: () => <Alignment /> },
    { name: "Background", content: () => <Background /> },
  ];
  return (
    <VideoWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      <div className="row">
        <div className="col s12 l7">
          <CreateVideoWrapper>
            <div className="content">
              <div className="video"></div>
              <div className="video-script">
                <textarea
                  placeholder="Type or paste your videoscript here. You can also request a
                    translation of an English script to any of 27 other languages"
                  id="textarea"
                ></textarea>
                <SecondaryButton>Listen</SecondaryButton>
              </div>
            </div>
          </CreateVideoWrapper>
        </div>
        <div className="col s12 l5">
          <TabsWrapper>
            <Tabs pageContent={pages} />
          </TabsWrapper>
        </div>
      </div>
    </VideoWrapper>
  );
}

export default Videos;
