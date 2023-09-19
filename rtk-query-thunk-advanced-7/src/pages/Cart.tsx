import { useAppSelector } from "../redux/store";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div>
      <div className="container mx-auto">
        {cart.map((item) => (
          <div className="grid grid-cols-2 lg:grid-cols-4  mb-20">
            <img  className="w-20 h-20 rounded-full" src={item.thumbnail} alt="" />  
            <h2 className="font-bold text-3xl">{item.title}</h2>
            <div className="text-xl">
              <p>{item.quantity} qnt</p>
              <p>{item.price} each</p>
            </div>
            <div className="text-xl rounded bg-blue-700 text-white font-bold w-16 h-8">
              {item.quantity * item.price} $
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
