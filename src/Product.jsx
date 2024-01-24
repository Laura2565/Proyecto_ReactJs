import React from 'react'

const Product = ({img, title, description, price}) => {
  return (
    <div>
      <img src={img} width='300px' height='300px' alt='img1' />
       <h1>{title}</h1>
       <p>{description}</p>
       <p>{price}</p>
    </div>
  )
}

export default Product
