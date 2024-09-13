import React, { useReducer } from 'react';
import { counterReducer, initialState } from '../reducers/counterReducer'

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center w-[400px] h-[400px] border-2 border-slate-400 rounded-2xl gap-6">
      <h1 className="text-3xl text-black font-bold mt-4">{state.value}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="border-2 border-slate-400 p-4 rounded-2xl transition-all duration-300 hover:bg-blue-500 hover:text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="border-2 border-slate-400 p-4 rounded-2xl transition-all duration-300 hover:bg-red-500 hover:text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: 5 })}
          className="border-2 border-slate-400 p-4 rounded-2xl transition-all duration-300 hover:bg-green-500 hover:text-white"
        >
          Increment by 5
        </button>
      </div>
    </div>  );
};

export default Counter;
