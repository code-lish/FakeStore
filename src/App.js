import { Suspense } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import ShowProducts from "./Components/ShowProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./Components/SingleProduct";
import CartItems from "./Components/CartItems";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RegistrationForm from "./Components/RegistrationForm";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
function App() {
  return (
    <Suspense fallback="loading...">
      <Router>
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/Products/:id" element={<SingleProduct />} />
          <Route path="/Products/showproducts" element={<ShowProducts />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Router>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
