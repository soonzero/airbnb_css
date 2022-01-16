import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <div className="cards">
        <Card
          status="SOLD OUT"
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card
          status="ONLINE"
          img="wedding.png"
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125}
        />
        <Card
          img="mountain-bike.png"
          rating="4.8"
          reviewCount={2}
          country="USA"
          title="Group Mountain Biking"
          price={50}
        />
      </div>
    </div>
  );
}
