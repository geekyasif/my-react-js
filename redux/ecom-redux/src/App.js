// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./components/product-details/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
