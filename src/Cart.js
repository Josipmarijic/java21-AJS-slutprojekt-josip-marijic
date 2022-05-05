import React from 'react';

const Cart = ({ cart, setCart, navigateTo}) =>{
  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

return (
    <>
      <h1>Kundvagn</h1>
      <button onClick={() => navigateTo('products')}>Produkter</button>
      <span>Antal varor i kundvagn ({cart.length})</span>
        {cart.map((product, idx) => (
          <div key={idx}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => removeFromCart(product)}>
            Ta bort från kundvagn
            </button>
          </div>
        ))}
    </>
  );
  }
  

export default Cart