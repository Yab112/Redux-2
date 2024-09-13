# React Application with `useReducer`

This documentation outlines the setup and configuration of a React application using the `useReducer` hook for state management with TypeScript and Tailwind CSS, utilizing Vite.

## 1. Set Up the Project

1. **Create a React App with Vite:**

    ```bash
    npm create vite@latest ./ --template react-ts
    ```

2. **Navigate to the Project Directory(if needed):**

    ```bash
    cd react-reducer-app
    ```

3. **Install Tailwind CSS:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

    Update `tailwind.config.cjs` and `src/index.css` as follows:

    - **`tailwind.config.cjs`**

      ```javascript
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
      ```

    - **`src/index.css`**

      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```

## 2. Set Up Reducer

1. **Create a Reducer:**

    Create a file called `src/reducers/counterReducer.ts` and add the following code:

    ```typescript
    type Action =
      | { type: 'INCREMENT' }
      | { type: 'DECREMENT' }
      | { type: 'INCREMENT_BY_AMOUNT'; payload: number };

    interface CounterState {
      value: number;
    }

    export const initialState: CounterState = { value: 0 };

    export const counterReducer = (state: CounterState, action: Action): CounterState => {
      switch (action.type) {
        case 'INCREMENT':
          return { value: state.value + 1 };
        case 'DECREMENT':
          return { value: state.value - 1 };
        case 'INCREMENT_BY_AMOUNT':
          return { value: state.value + action.payload };
        default:
          return state;
      }
    };
    ```

## 3. Create React Components

1. **Counter Component:**

    Create a file called `src/components/Counter.tsx` and add the following code:

    ```typescript
    import React, { useReducer } from 'react';
    import { counterReducer, initialState } from '../reducers/counterReducer';

    const Counter: React.FC = () => {
      const [state, dispatch] = useReducer(counterReducer, initialState);

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-3xl text-black font-bold mt-4">{state.value}</h1>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => dispatch({ type: 'INCREMENT' })}
              className="border-slate-400 p-4 rounded-2xl transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch({ type: 'DECREMENT' })}
              className="border-slate-400 p-4 rounded-2xl transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch({ type: 'INCREMENT_BY_AMOUNT', payload: 5 })}
              className="border-slate-400 p-4 rounded-2xl transition-all duration-300 hover:bg-green-500 hover:text-white"
            >
              Increment by 5
            </button>
          </div>
        </div>
      );
    };

    export default Counter;
    ```

## 4. Integrate Components

1. **Update App Component:**

    Modify `src/App.tsx` to include the Counter component:

    ```typescript
    import React from 'react';
    import Counter from './components/Counter';

    const App: React.FC = () => {
      return (
        <div className="App">
          <Counter />
        </div>
      );
    };

    export default App;
    ```

2. **Update Index File:**

    Ensure `src/main.tsx` renders the App component:

    ```typescript
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';

    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    ```

---

This README provides a step-by-step guide to setting up a React application using `useReducer`, Vite, TypeScript, and Tailwind CSS. If you have any questions or need further assistance, feel free to ask!
