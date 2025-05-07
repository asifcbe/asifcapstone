import React, { useContext } from "react";
// import { shopdata } from '../../../Data'
import { CategoriesContext } from "../../../contexts/products.context";
import "./CategoriesPreview.scss";
import CategoryPreview from "../../category-preview/CategoryPreview";
function CategoriesPreview() {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categories).map((title) => {
        const products = categories[title];
      return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </div>
  );
}

export default CategoriesPreview;
