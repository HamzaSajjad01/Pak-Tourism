import { useState } from "react";
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cities from './Components/Cities';
import Peaks from './Components/Peaks';
import Cuisine from './Components/Cuisine';
import Cultures from './Components/Cultures';
import Valleys from "./Components/valleys";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <section id="home">
          <Home />
        </section>
      {/* All components rendered on one page */}
      <div className="max-w-7xl mx-auto p-10 text-center space-y-20">
        <section id="provinces">
          <Cities />
        </section>

        <section id="valleys">
          <Valleys />
        </section>

        <section id="peaks">
          <Peaks />
        </section>

        <section id="cuisine">
          <Cuisine />
        </section>

        <section id="cultures">
          <Cultures />
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default App;
