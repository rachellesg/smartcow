import Dots from "../../assets/Icons/Dots";

import { VideoCardWrapper } from "./styles";

function VideoCard({ image }) {
  return (
    <VideoCardWrapper>
      <div className="content">
        <div className="action">
          <Dots />
        </div>
        <div className="image">
          <img src={image} />
        </div>
        <div className="title">Say Hi to users!</div>
        <div className="tags">
          <div className="tag">Email</div>
          <div className="tag">Marketing</div>
          <div className="tag">Greeting</div>
        </div>
      </div>
    </VideoCardWrapper>
  );
}

export default VideoCard;
