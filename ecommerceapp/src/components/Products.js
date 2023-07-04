import React from 'react'
import Product from './Product';
import appleWatch from '../image/appleWatch.jpg'
import './Products.css';

const products = [
  { id:1 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:2 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:3 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:4 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:5 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:6 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:7 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:8 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:9 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
  { id:10 , name: 'Apple Watch', price: '$499.00', description: 'Apple Watch, 126G', img:appleWatch},
]

function Products() {
  return (
    <main>
      <div className="productGrid">
        {products.map((product)=>(
            <div className="productGridItem" key={product.id}>
                <Product product={product}/>
            </div>
        ))}
      </div>    
    </main>
  )
}

export default Products