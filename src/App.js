import Contentbody from "./components/ContentBody";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import TestDragbar from "./components/TestDragbar";
import Footer from "./components/Footer";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex">
        <Topbar />
      </div>
      <div className="flex">
        <Sidebar />
        <TestDragbar/>
        <Contentbody/>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
