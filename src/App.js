import "./App.css";
import { useState } from "react";
import InfiniteScrollComponent from "./components/InfiniteScrollComponent";
import AutoCorrectTextArea from "./components/AutoCorrectTextArea/AutoCorrectTextArea";

function App() {
  const [current, setCurrent] = useState("Infinite-Scroll");

  const handleSwitch = () => {
    if (current == "Infinite-Scroll") {
      setCurrent("Auto-Correct-TextArea");
    } else {
      setCurrent("Infinite-Scroll");
    }
  };

  return (
    <div className="App">
      <div className={"toggle"} onClick={handleSwitch}>
        Toggle to {current}
      </div>
      {current != "Infinite-Scroll" ? (
        <InfiniteScrollComponent />
      ) : (
        <AutoCorrectTextArea />
      )}
    </div>
  );
}

export default App;
