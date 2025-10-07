import React from "react";
import CuisineSection from "./components/CuisineSection";
import Footer from "./components/Footer";
import MallSection from "./components/Mall-Section";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <MallSection />
      <CuisineSection />
      <Footer />
    </div>
  );
}

export default App;
