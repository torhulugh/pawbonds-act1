import React, { useState } from "react";
import Header from "./components/header/";
import Filter from "./components/filter";
import Footer from "./components/footer/";
import Cards from "./components/card";
import Dog from "./components/Dog/Dog";
import Petfinder from "./components/Petfinder/Petfinder";
import UmmooCard from "./components/card/ummooCard";
import "./App.css";

function App() {
  const [petfinder, setPetfinder] = useState([]);
  const [dogs, setDogs] = useState([]);

  return (
    <>
      <Header />
      
      <main>
        <Petfinder />
        <h1>Dogs for Adoption in Canada</h1>
        <p id="bodyTxt">
          Discover amazing dogs looking for their forever homes across Canada
        </p>
        <Filter />
        <section id="cards-container">
          <Cards />
          <UmmooCard />
        </section>
        <Dog />
      </main>
      <Footer />
    </>
  );
}

export default App;
