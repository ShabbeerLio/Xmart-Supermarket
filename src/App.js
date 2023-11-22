// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Products from "./Pages/Products/Products";

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
        </Switch>
      </Router>
      {/* new project begin here....... */}
    </>
  );
}

export default App;
