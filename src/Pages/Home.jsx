import React from "react";
import backgroundImage from '../assets/background-image.png';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import CenterSection from "../components/Center-Section";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Navigation />
        <CenterSection/>
      </div>
    </section>
  );
};

export default Home;
