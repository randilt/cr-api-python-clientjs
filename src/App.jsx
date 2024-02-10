import { useEffect } from "react";
import { Card } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
import data from "./data.json";

function App() {
  useEffect(() => {
    console.log(data.items);
  });
  const cards = data.items;
  return (
    <>
      <Navbar />
      <Sidebar />
      <ContentArea />
      {cards.map((card) => {
        return <h1 key={card.name}>{card.name}</h1>;
      })}
    </>
  );
}

export default App;
