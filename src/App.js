import Navbar from "./components/Navbar";
import TabBar from "./components/TabBar";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex">
        <TabBar />
      </div>
      <div className="flex-1">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
