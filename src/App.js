import './App.css';
import React,{createContext,useState} from 'react';
import Student from './Student'
import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import Add from './Add'
import Edit from './Edit'
import {Routes,Route} from 'react-router-dom'
const data=createContext();
function App() {
  const[arr,setarr]=useState([   
     {id:"1", Name:"John", Age:24,Course:"MERN", Batch:"October"},
    {id:"2", Name:"Doe",Age:22,Course:"MERN", Batch:"September"},
    { id:"3", Name:"Biden",Age:23, Course:"MERN", Batch:"September"},
   { id:"4", Name:"Barber",Age:34, Course:"MERN", Batch:"November"},
    { id:"5", Name:"Christ", Age:24,Course:"MERN",Batch:"December"},
    {id:"5",Name:"Elent",Age:24,Course:"MERN",Batch:"November"}
])
  return (
    <>
    <data.Provider value={{array:arr,setfun:setarr}}>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/student" element={<Student/>}></Route>
      <Route path="/create" element={<Add/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
      </Routes>
    </data.Provider>
    </>
  );
}

export default App;
export {data}
