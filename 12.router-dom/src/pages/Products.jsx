import React from 'react'
import Product from '../components/Product'
import { products } from '../data/products'
const Products = () => {
  return (
    <div>
      {
        products && products.map((product)=>(
          <Product product = {product} key={product.id}/>
        ))
      }
    </div>
  )
}

export default Products