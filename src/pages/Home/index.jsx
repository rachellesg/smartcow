import { Navigate } from "react-router-dom";

// Components
import Header from "../../components/Header";
import { HomeWrapper } from "./styles";

// Pages

import Login from "./Login";

function Home() {
  const pageHeaderDetails = {
    pageTitle: "Sign In",
  };

  const getToken = localStorage.getItem("token");

  console.log(getToken);

  return (
    <HomeWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      {getToken === "sm4rtcow" ? <Navigate to="/videos/saved" /> : <Login />}
      <div className="fullwidth-background" />
    </HomeWrapper>
  );
}

export default Home;
