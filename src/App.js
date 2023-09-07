import React from "react";
import "./main.scss";
import { Hero, About, Results, Contact, Footer } from "./components";

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
