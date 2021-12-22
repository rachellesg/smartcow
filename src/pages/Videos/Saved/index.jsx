import { Link } from "react-router-dom";

// Components
import Header from "../../../components/Header";

// Elements
import { PrimaryButton } from "../../../elements/Button";
import VideoCard from "../../../elements/Video";

// Assets
import personOne from "../../../assets/Videos/person-1.svg";
import { VideoWrapper } from "../styles";

function SavedVideos() {
  const pageHeaderDetails = {
    pageTitle: "Saved Videos",
    buttonsHeader: () => (
      <Link to="/videos/create">
        <PrimaryButton>Create New</PrimaryButton>
      </Link>
    ),
  };
  return (
    <VideoWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      <div className="row saved-videos">
        <div className="col l4">
          <VideoCard image={personOne} />
        </div>
      </div>
    </VideoWrapper>
  );
}

export default SavedVideos;
