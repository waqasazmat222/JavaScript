import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText]=useState("random title");
const clickHandler=()=>{
if(text==="random title"){
  setText("Hellow world");
}else{
  setText("Random title");
}
  
}
  return (<React.Fragment>
    <h2>{text}</h2>
    <button type="button" className="btn" onClick={clickHandler}> Change title </button>
  </React.Fragment>);
};

export default UseStateBasics;
