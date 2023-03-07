import React from "react";
import HomeCategories from "../components/HomeCategories";
import "./HomePage.css";

function HomePage(props) {
  return (
    <main className="home-page-container">
      <article className="home-page-banner">
        <img src="/images/Banner.jpg" alt="hills website banner"></img>
      </article>
      <div className="category-cards-container">
        <header className="home-page-header">
          <h3> Find your magic!</h3>
        </header>
        <HomeCategories />
      </div>
    </main>
  );
}

export default HomePage;
