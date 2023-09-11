//le nostre azioni che abbiamo definito all'interno nel nostro reducer dello specifico slice
import { increment, decrement, reset, incrementByAmount } from "../features/counter/counterSlice";
//il dispatch lo usiamo per inviare le nostre azioni
//il selector lo usiamo per recuperare lo state dallo store
import { useAppDispatch, useAppSelector } from "../store/store";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <section>
      <p>{count}</p>
      <div>
        {/* le azioni devono essere invocate come funzioni sono metodi */}
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment By Amount</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
}
