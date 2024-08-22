import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Placements from "./pages/Placements";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import SoftwareTesting from "./pages/SoftwareTesting";


function App() {
  const [name] = useState("");
  return (
    <Routes>
      <Route path="/" element={<Layout name={name} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
        <Route path="/softwaretesting" element={<SoftwareTesting />} />
      </Route>
    </Routes>
  );
}

export default App;
