import React, { useCallback } from "react";

import Greetings from "./Greetings";

function App() {
  const click = useCallback((name: string) => {
    console.log(name);
  }, []);
  return <Greetings name="리액트" click={click} />;
}

export default App;
