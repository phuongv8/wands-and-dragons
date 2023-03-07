import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useProductsProvider } from "../utils/ProductProvider";
import "./ProductDetailPage.css";
const ProductDetailPage = (props) => {
  const location = useLocation();
  const product = location.state.item;
  const { handleAddItems } = useProductsProvider();
  return (
    <div className="container mt-5 mb-5 productdetailpage">
      {" "}
      <div className="card">
        {" "}
        <div className="row g-0">
          {" "}
          <div className="col-md-6 border-end">
            {" "}
            <div className="d-flex flex-column justify-content-center">
              {" "}
              <div className="main_image">
                {" "}
                <img
                  src={product.imageUrl}
                  id="main_product_image"
                  width="350"
                  alt={product.name}
                />{" "}
              </div>{" "}
              <div className="p-3 right-side">
                <p>SKU: {product.sku}</p>
                <p> ID: {product.id} </p>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="col-md-6">
            {" "}
            <div className="p-3 right-side">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <h3 className="prod-name">{product.name}</h3>{" "}
              </div>{" "}
              <p className="manufacturer-info">
                {"By " + product.manufacturer}
              </p>
              <div className="mt-2 pr-3 content">
                {" "}
                <p className="prod-description">{product.description}</p>{" "}
              </div>{" "}
              <h3>{"$" + product.price + ".00"}</h3>{" "}
              <div className="ratings d-flex flex-row align-items-center">
                <div className="stars">
                  <form action="">
                    <input
                      className="star star-5"
                      id="star-5"
                      type="radio"
                      name="star"
                    />
                    <label className="star star-5" htmlFor="star-5"></label>
                    <input
                      className="star star-4"
                      id="star-4"
                      type="radio"
                      name="star"
                    />
                    <label className="star star-4" htmlFor="star-4"></label>
                    <input
                      className="star star-3"
                      id="star-3"
                      type="radio"
                      name="star"
                    />
                    <label className="star star-3" htmlFor="star-3"></label>
                    <input
                      className="star star-2"
                      id="star-2"
                      type="radio"
                      name="star"
                    />
                    <label className="star star-2" htmlFor="star-2"></label>
                    <input
                      className="star star-1"
                      id="star-1"
                      type="radio"
                      name="star"
                    />
                    <label className="star star-1" htmlFor="star-1"></label>
                  </form>
                </div>
              </div>
              <div className="buttons d-flex flex-row mt-5 gap-3">
                {" "}
                <Link to="/cart">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      handleAddItems(product);
                    }}
                  >
                    Buy Now
                  </button>
                </Link>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    handleAddItems(product);
                  }}
                >
                  Add to Basket
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ProductDetailPage;
