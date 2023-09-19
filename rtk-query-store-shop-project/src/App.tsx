import {Routes, Route} from "react-router-dom"
import Index from "./pages/Index";
import Product from "./pages/Product";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
export default function App() {

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" Component={Index}/>
        <Route path="/:id" Component={Product}/>
        <Route path="/cart" Component={Cart}/>
      </Routes>
    </div>
  );
}
