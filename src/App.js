import React from "react";
import "./main.scss";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Results from "./components/Results/Results";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Hero />
      <main>
        <About />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
