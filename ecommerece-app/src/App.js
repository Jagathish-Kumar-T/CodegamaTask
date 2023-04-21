import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import ProductDetals from "./Components/Products/ProducrDetails/ProductDetals";
import Cart from "./Components/Cart/Cart";
import NavProducts from "./Components/Navbar/NavProducts";
import Footer from "./Components/Footer/Footer";
import { Checkout } from "./Components/Checkout/Checkout";
import { useSelector } from "react-redux";
import { Orders } from "./Components/Orders/Orders";

function App() {
  const Products = useSelector((state) => state.reducer.products);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<NavProducts />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/products/:id"
          element={
            Products.length !== 0 ? <ProductDetals /> : <Navigate to="/home" />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
