// import React, { useState } from 'react';

const Cart = ({ cart, setCart, navigateTo, inputUsername}) =>{
  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

const buy = () =>{
  alert('köpet har genomförst');
  navigateTo('products');
  
}

// const [cost, setTotalCost] = useState();

const totalPrice = cart.reduce((sum, product) => sum + product.price,0);
return (
    <>  
      <h1>Kundvagn</h1>
      <h1>Välkommen {inputUsername}</h1>
      <button onClick={() => navigateTo('products')}>Produkter</button>
      <button onClick={() => buy()}>Köp</button>
      <span>Antal varor i kundvagn ({cart.length})</span>
      <span>Totalt pris ({totalPrice})</span>
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