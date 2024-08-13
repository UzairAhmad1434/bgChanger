import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-10 flex items-center justify-center flex-wrap bg-black p-4 rounded-lg gap-4 ">
        <button
          className="bg-blue-500 rounded-md px-4 py-2 w-24"
          onClick={() => setColor("blue")}
        >
          blue
        </button>
        <button
          className="bg-red-500 rounded-md px-4 py-2 w-24"
          onClick={() => setColor("red")}
        >
          red
        </button>
        <button
          className="bg-green-500 rounded-md px-4 py-2 w-24"
          onClick={() => setColor("green")}
        >
          green
        </button>
        <button
          className="bg-yellow-500 rounded-md px-4 py-2 w-24"
          onClick={() => setColor("white")}
        >
          yellow
        </button>
        <button
          className="bg-pink-500 rounded-md px-4 py-2 w-24"
          onClick={() => setColor("pink")}
        >
          pink
        </button>
        <button
          className="bg-purple-500 rounded-md px-4 py-2 w-24"
          onClick={() => setColor("purple")}
        >
          purple
        </button>
        <button
          className="bg-indigo-500 rounded-md px-4 py-2 w-24"
          onClick={() => setColor("indigo")}
        >
          indigo
        </button>
        <button
          className="bg-orange-500 rounded-md px-4 py-2 w-24"
          onClick={() => setColor("orange")}
        >
          orange
        </button>
      </div>
    </div>
  );
}

export default App;
