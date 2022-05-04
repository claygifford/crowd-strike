import "./App.css";
import Intro from "./pages/Intro";
import Challenge from "./pages/Challenge";
import { useState } from "react";

export enum Mode {
  Intro,
  Challenge,
}

function App() {
  const [mode, setMode] = useState(Mode.Challenge);

  return (
    <div className="App">
      {
        {
          [Mode.Intro]: <Intro {...{ mode, setMode }} />,
          [Mode.Challenge]: <Challenge {...{ mode, setMode }} />,
        }[mode]
      }
    </div>
  );
}

export default App;
