import { Navigate } from "react-router-dom";

// Components
import Header from "../../components/Header";
import { HomeWrapper } from "./styles";

function Home({ params }) {
  const pageHeaderDetails = {
    pageTitle: "Home",
  };

  const getToken = sessionStorage.getItem("token");

  console.log(params);

  return (
    <HomeWrapper>
      <Header pageHeaderDetails={pageHeaderDetails} />
      <div className="fullwidth-background" />
    </HomeWrapper>
  );
}

export default Home;
