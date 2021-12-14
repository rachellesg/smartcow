import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Sidebar from "../../components/Sidebar";

// Pages
import Home from "../../pages/Home";
import Account from "../../pages/Account";

function App() {
  return (
    <div className="container">
      {/* Page Container */}
      <div className="row">
        <Router>
          <Sidebar />
          {/* Main Content Start */}
          <div className="col offset-s1 s9">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/account" element={<Account />} />
              <Route exact path="*" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
