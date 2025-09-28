// src/pages/Home.jsx
import React from "react";
import Card from "../components/Card";

const Home = () => {
  // Example: render 20 cards dynamically
  const cards = Array.from({ length: 20 });

  return (
    <div className="flex flex-wrap justify-between gap-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      {cards.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Home;
