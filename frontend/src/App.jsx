import { useState, useEffect } from "react";
import axios from "axios";
const App=()=>{
const [mydata, setMydata]=useState("");
const laodData=()=>{
  axios.get("http://localhost:8000/api").then((res)=>{
      setMydata(res.data);
  })
}

useEffect(()=>{
  laodData();
}, [])






  return(
    <>
      <h1> Welcome To Cybrom Bhopal</h1>
      {mydata}
    </>
  )
}
export default App;