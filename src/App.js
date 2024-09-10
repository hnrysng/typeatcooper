import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Landing from "./components/Landing.js";
import List from "./components/List.js";
import About from "./components/About.js";

import Academic from "./components/Gallery/Academic.js";
import Bhreagh from "./components/Gallery/Bhreagh.js";
import Braemar from "./components/Gallery/Braemar.js";
import Chaplin from "./components/Gallery/Chaplin.js";
import Club from "./components/Gallery/Club.js";
import Exam from "./components/Gallery/Exam.js";
import Floe from "./components/Gallery/Floe.js";
import Geulpi from "./components/Gallery/Geulpi.js";
import Giardino from "./components/Gallery/Giardino.js";
import GUMMI from "./components/Gallery/GUMMI.js";
import Juju from "./components/Gallery/Juju.js";
import LIGARDEN from "./components/Gallery/LIGARDEN.js";
import Moradin from "./components/Gallery/Moradin.js";
import Nutshell from "./components/Gallery/Nutshell.js";
import OxfordSerif from "./components/Gallery/OxfordSerif.js";
import Rugerin from "./components/Gallery/Rugerin.js";
import Sacre from "./components/Gallery/Sacre.js";
import Spicious from "./components/Gallery/Spicious.js";
import XYZ from "./components/Gallery/XYZ.js";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Landing />} />
          <Route path="/List" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/Academic" element={<Academic />} />
          <Route path="/Bhreagh" element={<Bhreagh />} />
          <Route path="/Braemar" element={<Braemar />} />
          <Route path="/Chaplin" element={<Chaplin />} />
          <Route path="/Club" element={<Club />} />
          <Route path="/Exam" element={<Exam />} />
          <Route path="/Floe" element={<Floe />} />
          <Route path="/Geulpi" element={<Geulpi />} />
          <Route path="/Giardino" element={<Giardino />} />
          <Route path="/GUMMI" element={<GUMMI />} />
          <Route path="/Juju" element={<Juju />} />
          <Route path="/LIGARDEN" element={<LIGARDEN />} />
          <Route path="/Moradin" element={<Moradin />} />
          <Route path="/Nutshell" element={<Nutshell />} />
          <Route path="/OxfordSerif" element={<OxfordSerif />} />
          <Route path="/Rugerin" element={<Rugerin />} />
          <Route path="/Sacre" element={<Sacre />} />
          <Route path="/Spicious" element={<Spicious />} />
          <Route path="/XYZ" element={<XYZ />} />
        </Routes>
      </AnimatePresence>

      <NavBar />
    </>
  );
}

export default App;
