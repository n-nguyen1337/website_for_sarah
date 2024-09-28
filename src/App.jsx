import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import About from "./pages/About";
import Poem from "./pages/Poem";
import Photos from "./pages/Photos";
import Cursor from "../src/components/Cursor";
import Layout from "./pages/Layout";
import ArchiveProjects from "./pages/ArchiveProjects";
import NotFound from "./pages/NotFound";
import "./App.css";
import confetti from 'canvas-confetti';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const launchConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 200,
      origin: { y: 0.6 }
    });
  };

  // Use useEffect to call the function every 500 milliseconds
  useEffect(() => {
    const interval = setInterval(launchConfetti, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="App ">
      {/* <Cursor /> */}
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <ScrollToTopOnRouteChange />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/projectlist" element={<ArchiveProjects />} />
            <Route path="/poem" element={<Poem />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
