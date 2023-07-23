import React from "react";
import "./App.css";
import TopHeader from "./components/TopHeader";
import HeroSection from "./components/HeroSection";
import Client from "./components/Client";
import GreatSince from "./components/GreatSince";
import BusinessHelp from "./components/BusinessHelp";
import HappyClient from "./components/HappyClient";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      {/* <h1 className="title text-4xl">Welcome to React</h1> */}
      <TopHeader />
      <HeroSection />
      <Client />
      <BusinessHelp />
      <GreatSince />
      <HappyClient />
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
