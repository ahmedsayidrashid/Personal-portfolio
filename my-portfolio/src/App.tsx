import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://vite.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            className="transition-transform hover:scale-110"
          >
            <img
              src={reactLogo}
              className="w-24 h-24 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Vite + React + Tailwind
        </h1>

        <div className="text-center">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Count is {count}
          </button>
          <p className="mt-6 text-gray-300">
            Edit{" "}
            <code className="px-2 py-1 bg-gray-700 rounded">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={() => setCount((count) => count - 1)}
            className="px-6 py-3 bg-blue-600 hover:bg-red-700 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Count is {count}
          </button>
          <p className="mt-6 text-gray-300">
            Edit{" "}
            <code className="px-2 py-1 bg-gray-700 rounded">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="text-center mt-12 text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
