import React, {usestate} from “react”; 7.4K (gzipped: 3K)

import “/.App.css”;

return (

<div className="App">
  <div className=(isCircle ? "circle": "square"}></div>
    <button onClick={() => setIsCircle(!isCircle)}> Change Shape</button>
</div>
);

const nameInput = useRef(null);
const clearInput = () =>{
  nameInput.current.value="";
  console.log (nameInput.current)
};
return (
  <div className= "App">
  <inpput type="text" placeholder="Write Your Name..." ref={nameInput}/>
  <button onClick={clearInput}>Sumbit</button>
  </div>
);
}
