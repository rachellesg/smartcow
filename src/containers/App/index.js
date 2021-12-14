import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routes
import Home from "../../pages/Home";
import Account from "../../pages/Account";

// Components
import Sidebar from "../../components/Sidebar";

// Assets
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Page Container */}
      <div className="container">
        <div className="row">
          <Router>
            <Sidebar />
            {/* Main Content Start */}
            <div className="col offset-s1 s9">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
