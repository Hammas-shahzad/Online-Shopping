import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Notfound from "./pages/notfound/Notfound";
import Products from "./pages/products/Products";
import MyState from "./context/data/myState";
import Login from "./pages/registraion/Login";
import Signup from "./pages/registraion/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productInfo/:id" element={<ProductInfo/>} />
          <Route path="*" element={<Notfound />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
