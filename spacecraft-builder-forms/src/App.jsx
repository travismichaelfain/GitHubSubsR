import { useState } from "react";
import SpaceCraftBuilder from "./SpaceCraftBuilder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SpaceCraftBuilder />
    </>
  );
}

export default App;
