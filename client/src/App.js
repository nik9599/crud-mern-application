
import './App.css';
import Mainpage from "./pages/Mainpage.jsx";

import Addpage from "./pages/Addpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route exact path="/add" element={<Addpage />} />
        <Route exact path="/Update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
