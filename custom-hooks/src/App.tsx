import { useState } from "react";
import "./App.css";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";

function App() {
  const { count, increase, decrease } = useCounter();
  const {open, change} = useToggle();
  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={increase}>Arttır</button>
        <button onClick={decrease}>Azalt</button>
      </div>
      <hr />
      <div>
        {open && <div style={{width: + "100px", height: "100px", backgroundColor: "red"}}>kutu</div>}
        <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button>
      </div>
    </div>
  );
}

export default App;
