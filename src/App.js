import React, { useState }  from 'react';
import Products from './Products';
import Cart from './Cart'
import Loggin from './Loggin';

const productPage = 'products';
const cartPage = 'cart';
const logginPage = 'logginpage'  

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(logginPage);
  const [totalProducts, setTotalProducts] = useState(0)
  const [inputUsername, setInputUsername] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const navigateTo = (newPage) => {
    if (page === logginPage) {
      setPage(newPage);
    } else if (page === productPage){
      setPage(newPage);
    } else if (page === cartPage) {
      setPage(newPage);
    }
  };

  return (
   <>
   {page === productPage && ( <Products cart={cart} setCart={setCart} navigateTo={navigateTo} totalProducts={totalProducts} setTotalProducts={setTotalProducts} inputUsername={inputUsername}/>)}
   {page === cartPage && (<Cart cart={cart} setCart={setCart} navigateTo={navigateTo} totalProducts={totalProducts} setTotalProducts={setTotalProducts} inputUsername={inputUsername} />)}
   {page === logginPage && (<Loggin navigateTo={navigateTo} inputUsername={inputUsername} inputPassword={inputPassword} setInputPassword={setInputPassword} setInputUsername={setInputUsername}/>)}
   </>  
  );
}

export default App;
