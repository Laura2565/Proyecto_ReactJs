import React from 'react'

const Product = ({img, title, description, price}) => {
  return (
    <div className='product-container'>
    <div className='product-card'>
      <img src={img} width='300px' height='300px' alt='img1' />
       <h1 className='product-title'>{title}</h1>      
       <p className='product-price'>{price}</p>
       <div className='product-description'>{description}</div>
    </div>
    </div>
  )
}

export default Product;
