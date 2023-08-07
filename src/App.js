import BusinessHelp from "./components/BusinessHelp";
import React, { useEffect } from "react";
import "./App.css";
import TopHeader from "./components/TopHeader";
import HeroSection from "./components/HeroSection";
import Client from "./components/Client";
import GreatSince from "./components/GreatSince";
import HappyClient from "./components/HappyClient";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { useRef } from "react";
import FloatingBtn from "./components/FloatingBtn";

function App() {
  const appRef = useRef(null);
  const businessHelpRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToTop = () => {
    console.log("button triggered");
    appRef.current.scrollIntoView({ behavior: "smooth" });
    console.log(appRef.current);
  };
  useEffect(() => {
    console.log("useEffect triggered");
    scrollToRef(businessHelpRef);
  }, []);
  return (
    <React.Fragment>
      <div ref={appRef}>
        <TopHeader />
        <HeroSection />
        <Client />
        <BusinessHelp ref={businessHelpRef} />
        <GreatSince />
        <HappyClient />
        <Newsletter />
        <Footer />
        <FloatingBtn onClick={handleScrollToTop} />
      </div>
    </React.Fragment>
  );
}
export default App;
