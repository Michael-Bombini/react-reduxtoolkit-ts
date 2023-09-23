import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import axios from "axios";
import Modal from "./components/ui/Modal";
import { useAppDispatch } from "./redux/store";
import { openModal } from "./redux/slices/modalSlice";
export default function App() {
  // useEffect(() => {
  //   async function getData(){
  //     const data = await axios('https://shoply-d7eed-default-rtdb.europe-west1.firebasedatabase.app/.json');
  //     console.log(data);
  //   }

  //   getData();
  // },[])

  const dispatch = useAppDispatch();

  return (
    <div>
      <Modal />
      <Navigation />
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/:id" Component={Product} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}
