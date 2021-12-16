import CheckIcon from "../../assets/Icons/Check";
import CrossIcon from "../../assets/Icons/Cross";

import { Button } from "../Button";

import { CardWrapper } from "./styles";

function Card({ data }) {
  const desktopColumns = 12 / data.length;
  const selectedPackage = data.filter((item) => {
    return item.active === true;
  });
  return (
    <div className="row">
      {data &&
        data.map((card) => {
          const { name, content, price } = card;
          const checkSelectedPackage = selectedPackage[0].name === name;
          return (
            <CardWrapper
              key={name}
              className={`col s6 l${desktopColumns} ${
                checkSelectedPackage ? "active" : ""
              }`}
            >
              <div className="card">
                <div className="card-content">
                  <h2>{name}</h2>
                  {content.length >= 2 ? (
                    <>
                      <ul>
                        {content.map((item) => {
                          const { checked, name } = item;
                          return (
                            <li key={`${name}+${item.indexOf}`}>
                              <div className="marker">
                                {checked ? <CheckIcon /> : <CrossIcon />}
                              </div>
                              {name}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="price">
                        <span className="sign">$</span>
                        {price}
                      </div>
                      {checkSelectedPackage ? (
                        <div className="current-label">Current Plan</div>
                      ) : (
                        <Button className="button">Upgrade</Button>
                      )}
                    </>
                  ) : (
                    <>
                      <ul>
                        <li>
                          <div className="marker">
                            {content.checked ? <CheckIcon /> : <CrossIcon />}
                          </div>
                          {content.name}
                        </li>
                      </ul>
                      {checkSelectedPackage ? (
                        <div className="current-label">Current Plan</div>
                      ) : (
                        <Button className="button">Upgrade</Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </CardWrapper>
          );
        })}
    </div>
  );
}

export default Card;
