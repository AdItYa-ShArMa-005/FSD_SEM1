import { useState } from "react";
import Header from './components/Header';
import ProductList from "./components/ProductList";
import CartCheckOut from "./components/CartCheckOut";
import './App.css';
export default function App() {
  const[cart,setCart] = useState([]);
  const[totalAmt,setAmt]= useState(0);
  const products =[
    {
      id:1,
      name:"laptop",
      price:56000,
      image:"https://th.bing.com/th/id/OIP.EA_8YDK_jPYhgOQqc_q4TgHaF3?w=224&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    } ,
    {
      id:2,
      name:"mobile",
      price:25000,
      image:"https://th.bing.com/th/id/OIP.y3dfC0ymsBf5WlBpliOLBgHaHa?w=203&h=270&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
      id:3,
      name:"Desk",
      price:1500,
      image:"https://www.bing.com/th/id/OIP.c3UPcaf0npt9Qq7qtFZsewHaEP?w=297&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
    {
      id:4,
      name:"Table",
      price:500,
      image:"https://www.bing.com/th/id/OIP.4saMVIG7rYHKbZQm0LtYhAHaH2?w=185&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    }
  ];

  function addToCart(product)
  {
    setCart([...cart,product]);
    setAmt(totalAmt+product.price);
  }

  function removeFromCart(product)
  {
    setCart(cart.filter((item) => item.id !== product.id));
    setAmt(totalAmt - product.price);
  }

  return(
    <div>
      <Header cardCount = {cart.length} />
      <ProductList products={products} addToCart={addToCart} />
      <CartCheckOut cart={cart} removeFromCart={removeFromCart} totalAmount={totalAmt} />
    </div>
  )
}

