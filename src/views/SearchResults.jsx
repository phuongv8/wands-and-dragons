import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeCategories from "../components/HomeCategories";
import "./HomePage.css";

function SearchResults(props) {
  return (
    <main className="home-page-container">
      <HomeBanner />
      {props.inventory
        .filter((item) => {
          if (props.searchTerm === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(props.searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
            </div>
          );
        })}
    </main>
  );
}

export default SearchResults;
