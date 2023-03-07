import React from "react";
import categoryData from "./datasource/home-categories-data.json";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeCategories = () => {
  return categoryData.map((category) => {
    return (
      <div key={category.id} className="category-card">
        <div className="category-description">
          <h6>{category.header}</h6>
        </div>
        <div className="card-body-wrapper">
          <div className="card-body">
            <Link to={"category/" + category.name}>
              <img
                className="card-img-top"
                src={category.image}
                alt={category.name}
              />
            </Link>
          </div>
          <h5 className="category-info">
            {category.description}
          </h5>
        </div>
        <Link to={"category/" + category.name}>
          <h5 className="card-title">
            {category.name}
            <ArrowForwardIosIcon />
          </h5>
        </Link>
      </div>
    );
  });
};

export default HomeCategories;
