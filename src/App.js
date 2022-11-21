import Header from "./components/header";
import Nav from "./components/nav";
import Section from "./components/section";
import Imgs from "./components/imgs";
import Feature from "./components/feature";
import Porto from "./components/porto";
import Bestseller from "./components/best_seller"

// import Products from "./component/products";
// import Login from "./component/login";
// import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Section />
      <Imgs />
      <Feature />
      <Porto />
      <Bestseller />

    </div>
  );
}

export default App;
