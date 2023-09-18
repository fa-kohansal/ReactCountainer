import { useState } from "react";
import Styles from './App.module.css'
const App = () => {
 let [counter,setCounter]=useState(0)
    return (
        <div className=" d-flex flex-row flex-wrap bg-dark col-8 offset-2 p-5 mt-5  rounded justify-content-center shadow ">
            <h2 className="col-11 bg-light mx-1 rounded-top p-2  text-center text-dark mb-4">counter :{counter} </h2>
            <button className="btn btn-outline-success col-2 mx-2 mt-3" onClick={()=>setCounter(counter+1)} >+</button>
            <button className="btn  btn-outline-warning col-2 mx-2 mt-3 " onClick={()=>setCounter(0)} >reset</button>
            <button className="btn btn-outline-danger col-2 mx-2 mt-3" onClick={()=>setCounter(counter-1)} disabled={counter>0 ? null : "disabled"} >-</button>
        </div>
      );
}
 
export default App;
