import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

//https://mui.com/material-ui/material-icons/?query=basket&selected=ShoppingBasket
