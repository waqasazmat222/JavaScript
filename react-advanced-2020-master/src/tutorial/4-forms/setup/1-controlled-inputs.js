import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
const [firstName,setFirstName]=useState('');
const [email,setEmail]=useState('');
const [people,setPeople]=useState([]);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(firstName&&email){
      const person = {id:new Date().getTime().toString() ,firstName,email};
      console.log(person);
      setPeople((people)=>{
        return[...people,person];
      });
      setFirstName("");
      setEmail("");
    }else{
      console.log("Wrong value");
    }
    
  }
  return (<>
  <article>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control" >
        <label htmlFor="firstName">Name: </label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="email"> EMail : </label>
        <input type="text" id="eMail" name="eMail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
        <button type="submit" >Add person</button>
      </div>
    </form>
    {people.map((person)=>{
      const {id, firstName,email}=person;
      return(
        <div className="item" key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      );
    })}
  </article>
  </>);
};

export default ControlledInputs;
