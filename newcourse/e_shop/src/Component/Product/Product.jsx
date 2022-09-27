import React from 'react'
import "./Product.Module.scss"
import ProductFilter from './ProductFilter/ProductFilter'
const Product = () => {
  return (
    <section>
        <div className={`container`}>
            <aside className=''>
            <ProductFilter />
            </aside>
        </div>
        <h2>Product</h2>
        </section>
  )
}

export default Product