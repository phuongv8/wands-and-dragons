import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { useProductsProvider } from "../utils/ProductProvider";
import "./ProductsPage.css"

function ProductsPage() {
  const { inventory, isLoading, handleAddItems } = useProductsProvider();
  const categoryType = useParams().type;
  const [pageData, setPageData] = useState(inventory);

  useEffect(() => {
    if (categoryType) {
      const data = inventory.filter(
        (item) => item.category.toLowerCase() === categoryType.toLowerCase()
      );
      setPageData(data);
    } else {
      setPageData(inventory);
    }
  }, [inventory, categoryType]);

  if (!isLoading) {
    return (
      <main className="products-page-container">
        <section className="products">
          <ProductCard pageData={pageData} handleAddItems={handleAddItems} />
        </section>
      </main>
    );
  } else {
    return <div>Loading</div>;
  }
}
export default ProductsPage;
