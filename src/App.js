import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div className="container">
      <Nav />
      <Hero />
      <div className="cards">{cards}</div>
    </div>
  );
}
