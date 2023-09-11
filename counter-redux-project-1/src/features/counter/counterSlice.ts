//ogni slice rappresenterà una singola feature della nostra app (es: commenti, video,)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  //è simili all use reducer di react all interno creeremo le nostre azioni (actions)
  reducers: {
    //riceviamo come parametro lo stato dello slice
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    //nell action ci sarà il nostro payload che rappresenterà il valore che mettiamo come parametro
    //possiamo anche accedere al type che è una stringa
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

//dobbiamo destrutturare le nostre actions ed esportarle
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
//esportiamo il reducer completo perchè lo store ne ha bisogno
export default counterSlice.reducer;
