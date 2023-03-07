import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard(props) {
  return props.pageData.map((item) => {
    return (
      <div className="product-card" key={item.id}>
        <div className="product-image">
          <Link to="/productdetail" state={{ item }}>
            <img src={item.imageUrl} alt={item.name} />
          </Link>
        </div>
        <div className="product-info">
          <h5>{item.name}</h5>
          <h6>{"$" + item.price + ".00"}</h6>
        </div>
        <button className="btn btn-outline-blue">
          <Link to="/productdetail" state={{ item }}>
            More Details
          </Link>
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            props.handleAddItems(item);
          }}
        >
          Add to Basket
        </button>{" "}
      </div>
    );
  });
}

export default ProductCard;
