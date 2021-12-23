import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Sidebar from "../../components/Sidebar";

// Pages
import Home from "../../pages/Home";
import Account from "../../pages/Account";
import Videos from "../../pages/Videos/Create";
import SavedVideos from "../../pages/Videos/Saved";

import Login from "../../pages/Home/Login";
import Register from "../../pages/Home/Register";

import { AppWrapper } from "./styles";

function App() {
  return (
    <div className="container">
      {/* Page Container */}
      <AppWrapper className="row">
        <Router>
          <div className="sidebar col s12 l1">
            <Sidebar />
          </div>
          <div className="main-content col l10 s12">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/account" element={<Account />} />
              <Route exact path="/videos/create" element={<Videos />} />
              <Route exact path="/videos/saved" element={<SavedVideos />} />
              <Route exact path="*" element={<Home />} />

              <Route exact path="/login" element={<Login />} />
              <Route
                exact
                path="/register"
                params={"Register"}
                element={<Register />}
              />
            </Routes>
          </div>
        </Router>
      </AppWrapper>
    </div>
  );
}

export default App;
