import React from 'react'
import { categories } from "../../Data.js";
import CategoryItem from '../category-item/category-item.component.jsx';

function Directory() {
    return(
    <div className="categories-container">
    {categories.map(d=><CategoryItem {...d}/>)}
     </div>
    )
}
export default Directory;