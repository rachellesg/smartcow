import { useState, memo, useMemo } from "react";

// Assets
import personOne from "../../../../assets/Videos/person-1.svg";
import actorAnna from "../../../../assets/Videos/anna.svg";
import actorMike from "../../../../assets/Videos/mike.svg";
import actorVincent from "../../../../assets/Videos/vincent.svg";
import actorPeter from "../../../../assets/Videos/peter.svg";
import actorSkye from "../../../../assets/Videos/skye.svg";
import actorMay from "../../../../assets/Videos/may.svg";

import { ActorWrapper } from "./styles";

const listOfActors = [
  { name: "Anna", image: actorAnna },
  { name: "Yoyo", image: personOne },
  { name: "Skye", image: actorSkye },
  { name: "Mike", image: actorMike },
  { name: "Vincent", image: actorVincent },
  { name: "Peter", image: actorPeter },
  { name: "May", image: actorMay },
];

function Actor() {
  const [selectedActor, setSelectedActor] = useState("Yoyo");

  const actors = useMemo(
    () =>
      listOfActors.map((item) => {
        const { name, image } = item;
        return (
          <div
            className={`item${selectedActor === name ? " active" : ""}`}
            key={name}
            onClick={() => setSelectedActor(name)}
          >
            <div className="image">
              <img src={image} />
            </div>
            <div className="name">{name}</div>
          </div>
        );
      }),
    [selectedActor]
  );
  return <ActorWrapper>{actors}</ActorWrapper>;
}

export default Actor;
