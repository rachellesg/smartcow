import { Link } from "react-router-dom";

// Components
import Header from "../../../components/Header";

// Elements
import { PrimaryButton } from "../../../elements/Button";
import VideoCard from "../../../elements/Video";

// Assets
import personOne from "../../../assets/Videos/person-1.svg";

function SavedVideos() {
  const pageHeaderDetails = {
    pageTitle: "Saved Videos",
    buttonsHeader: () => (
      <PrimaryButton>
        <Link to="/videos/create">Create New</Link>
      </PrimaryButton>
    ),
  };
  return (
    <>
      <Header pageHeaderDetails={pageHeaderDetails} />
      <div className="row">
        <div className="col l3">
          <VideoCard image={personOne} />
        </div>
      </div>
    </>
  );
}

export default SavedVideos;
