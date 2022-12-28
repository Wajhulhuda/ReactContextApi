import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import myContext from "./components/context";
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={{ isDark, setIsDark }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
          </Routes>
        </myContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
