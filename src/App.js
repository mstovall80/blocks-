import React, {useState} from "react";
import './App.css';

import Form from "./components/Form"


function App() {
  
  const [boxes, setBoxes] = useState([])


  return ( <div className="App">
    <Form boxes={boxes} setBoxes={setBoxes} />

    <div style={{ display:"flex"}}>
      {boxes.map((color, i) => {
        return (
          <div
          key={i}
          style={{
            backgroundColor: color,
            width: 100, 
            height: 100, 
            marginRight: 10 
          }}
          ></div>
        );
      })}
    </div>
  </div>
  );
}
export default App;
