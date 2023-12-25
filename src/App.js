import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products-details" exact element={<ProductDetails />} />
          <Route path="/my-account" exact element={<MyAccount />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
