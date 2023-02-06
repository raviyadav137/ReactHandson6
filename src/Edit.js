import React,{ useState,useContext} from 'react';
import {data} from './App'
import {useNavigate,useLocation} from 'react-router-dom'
function Edit(){
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[course,setCourse]=useState('');
    const[batch,setBatch]=useState('');
    let index=useLocation().state.data;
    const arr=useContext(data).array;
    console.log(index);
  

    let history=useNavigate();


    const handleedit=(e)=>{
        e.preventDefault();
       let a=arr[index];
       console.log(a);
       a.Name=name;
       a.Age=age;
       a.Course=course;
       a.Batch=batch;
        history("/student");
    }

    /*useEffect(()=>{
        setName(arr[index].Name)
        setAge(arr[index].Age)
        setCourse(arr[index].Course)
        setBatch(arr[index].Batch)
    },[index])*/
   return(
        <>
        <form className="form_Add">
        <input type="text"  required placeholder={arr[index].Name} onChange={(e)=>setName(e.target.value)}></input>
        <input type="text" placeholder={arr[index].Age}  onChange={(e)=>setAge(e.target.value)}></input><br/><br/><br/><br/>
        <input type="text" placeholder={arr[index].Course}  onChange={(e)=>setCourse(e.target.value)}></input>
        <input type="text" placeholder={arr[index].Batch} onChange={(e)=>setBatch(e.target.value)}></input><br/><br/><br/>
         <button onClick={(e)=>handleedit(e)} type="submit">update</button>
       </form>
        </>
    )
}
export default Edit 
