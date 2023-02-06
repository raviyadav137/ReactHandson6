import React,{useState,useContext} from 'react';
import {v4 as uuid} from "uuid";
import {data} from './App'
import {useNavigate} from 'react-router-dom'
function Add(){
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[course,setCourse]=useState('');
    const[batch,setBatch]=useState('');
    let history=useNavigate();
    const arr=useContext(data).array;

    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids=uuid();
        let uniqueId=ids.slice(0,8);
    
        let a=name,
        b=age,
        c=course,
        d=batch;
    
        arr.push({id:uniqueId,Name:a,Age:b,Course:c,Batch:d});
        history("/student");
      }
    return(
        <>
        <form className="form_Add">
       
       <input type="text" placeholder="Enter Name"required onChange={(e)=>setName(e.target.value)} ></input>
       
       <input type="text" placeholder="Enter Age"required onChange={(e)=>setAge(e.target.value)}></input><br/><br/><br/><br/>
       <input type="text" placeholder="Enter Course"required onChange={(e)=>setCourse(e.target.value)}></input>
       <input type="text" placeholder="Enter Batch"required onChange={(e)=>setBatch(e.target.value)}></input><br/><br/><br/>
        <button onClick={(e)=>handleSubmit(e)} type="submit">Submit</button>
      </form>
        </>
    )
}
export default Add