import React from "react";
import "./main.scss";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Results from "./components/results/Results";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Home />
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
