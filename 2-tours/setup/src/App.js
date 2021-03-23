import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoaing]=useState(true);
  const [tours,setTours]=useState([]);


const fetchTours= async ()=>{
setLoaing(true);
try{
  const responce=await fetch(url);
  const tours=await responce.json();
  setLoaing(false);
  setTours(tours);
}catch(error){
  setLoaing(false);
  console.log(error);
}
  
}


useEffect(()=>{
  fetchTours();
});

  if(loading){
    return(<main>
      <Loading />
    </main>);
    
  }
  return <main>
    <Tours tours={tours}/>
  </main>
}

export default App
