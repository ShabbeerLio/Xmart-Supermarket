import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
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
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products-details' exact>
            <ProductDetails />
          </Route>
          <Route path='/my-account' exact>
            <MyAccount />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </Router>
      {/* new project begin here....... */}
    </>
  );
}

export default App;
