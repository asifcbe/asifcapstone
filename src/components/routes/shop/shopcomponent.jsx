// import React, { useContext } from "react";
// // import { shopdata } from '../../../Data'
// import { CategoriesContext } from "../../../contexts/products.context";
// import "./shop.style.scss";
// import CategoryPreview from "../../category-preview/CategoryPreview";
// function Shop() {
//   const { categories } = useContext(CategoriesContext);
//   return (
//     <div className="shop-container">
//       {Object.keys(categories).map((title) => {
//         const products = categories[title];
//       return <CategoryPreview key={title} title={title} products={products} />;
//       })}
//     </div>
//   );
// }

// export default Shop;


import React from 'react'
import CategoriesPreview from '../categoriespreview/CategoriesPreview'
import { Route, Routes } from 'react-router-dom'

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
    </Routes>
  )
}

export default Shop
