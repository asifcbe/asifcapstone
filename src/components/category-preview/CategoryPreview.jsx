import React from 'react'
import ProductCard from '../productcard/ProductCard'
import "./CategoryPreview.scss"
function CategoryPreview({title,products}) {
  return (
    <div id='category-preview-container'>
        <h2><span className='title'>{title.toUpperCase()}</span></h2>
        <div className="preview">
            {products.filter((_,indx)=>indx<4).map(d=>{
                return (
                    <ProductCard key={d.id} product={d}/>
                )
            })}
        </div>
    </div>
  )
}

export default CategoryPreview