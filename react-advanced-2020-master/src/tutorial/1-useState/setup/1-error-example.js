import React from 'react';

const ErrorExample = () => {

const handleClick =()=>{
  title="Hello world"
  console.log(title);

}

  let title="Random title";
  return (<React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}> Change title </button>
  </React.Fragment>);
};

export default ErrorExample;
