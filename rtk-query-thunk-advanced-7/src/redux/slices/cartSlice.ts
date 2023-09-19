import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../models/Product";
import { isValidCart } from "../../utils/validateCart";

const storedCart = localStorage.getItem("cart");
const initialState: Cart[] = storedCart ? (isValidCart(storedCart) ? JSON.parse(storedCart) : []) : [];


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Cart, "quantity">>) => {
      const existingProduct = state.find(
        (product) => product.title === action.payload.title
      );

      if (existingProduct) {
        //se esiste già aggiorniamo la quantità
        existingProduct.quantity += 1;
      } else {
        //se non esiste lo creiamo con quantità 1
        state.push({ ...action.payload, quantity: 1 });
      }
      //aggiorniamo il localstorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { addProduct } = cartSlice.actions;
