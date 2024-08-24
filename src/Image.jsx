import React from 'react'
import product from './Product'

const Image = () => {
  return (
    <div>
        <img src={product.imgURL} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />;

    </div>
  )
}

export default Image