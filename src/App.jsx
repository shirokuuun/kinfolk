import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Landing from "./components/sections/Landing";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

function AppShell() {
  const [entered, setEntered] = useState(
    () => sessionStorage.getItem("kinfolk_entered") === "true",
  );

  if (!entered) {
    return <Landing onEnter={() => setEntered(true)} />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/landing" element={<Landing onEnter={() => {}} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
