import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/store";

export default function Navigation() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <nav className="px-8 py-6 mb-12 bg-blue-700 flex justify-between">
      <Link to={"/"}>
        <h1 className="text-3xl text-white font-semibold">RTK-SHOP</h1>
      </Link>
      <div className="text-white text-xl font-bold">
        <Link to={"/cart"}>{cart.length}</Link>
      </div>
    </nav>
  );
}
