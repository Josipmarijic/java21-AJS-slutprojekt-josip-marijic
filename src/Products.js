import React, { useState } from 'react'
import data from './Data'


const Products = ({cart, setCart, navigateTo}) => {
  const [productData] = useState(data.productData)

  const addToCart = (product) => {
    setCart([...cart, {...product}])
  };

return (
  <>
    <h1>Produkter</h1>

    <button onClick={()=> navigateTo('logginpage')}>Logga ut</button>
    <button onClick={() => navigateTo('cart')}>Kundvagn ({cart.length})</button>
      {productData.map((product, idx) => (
        <div key={idx}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <h4>${product.price}</h4>
          <button onClick={() => addToCart(product)}>
          Lägg till i kundvagn
          </button>
        </div>
      ))}
  </>
);
}

export default Products