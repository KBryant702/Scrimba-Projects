import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Card";
import Data from "./Data";

export default function App() {
  const listOfCards = Data.map((CardsData) => {
    return <Cards  items={CardsData} />;
  });
  console.log(listOfCards);
  return (
    <main>
      <Navbar />
      <div className="list-cards">{listOfCards}</div>
    </main>
  );
}