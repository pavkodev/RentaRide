import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p className="m-2 flex items-center justify-center bg-red-600">
          Hello, World!
        </p>
        <p className="m-2 flex items-center justify-center bg-red-600">
          Hello, World!
        </p>
        <p className="m-2 flex items-center justify-center bg-red-600">
          Hello, World!
        </p>
      </div>
    </>
  );
}

export default App;
