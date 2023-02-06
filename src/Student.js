import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {data} from './App'
function Student(){
  const handleEdit=(id,name,age,batch,course)=>{
    localStorage.setItem('name',name);
localStorage.setItem('age',age);
localStorage.setItem('batch',batch);
localStorage.setItem('course',course);
localStorage.setItem('id',id);
  }
    const arr=useContext(data).array;
    console.warn("arr",arr)
    return(
        <>
       <br/><br/>
       <div className="col1">
          <div className="col2">
              <h1>Student Details</h1>
               <Link to="/create"><p>Add New Student</p></Link>
       </div>
       <br/><br/>
  <table border="1" cellSpacing="0" width="80%">
             <thead>
                 <tr>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Course</th>
                     <th>Batch</th>
                     <th>Change</th>
                 </tr>
              </thead>
              <tbody>
               {
                
                 arr.map((item,index)=>{
                   return(
                     <tr key={index}>
                       <td>
                         {item.Name}
                       </td>
                       <td>
                         {item.Age}
                       </td>
                       <td>
                         {item.Course}
                       </td>
                       <td>
                         {item.Batch}
                       </td>
                       <td>
                       <Link state={{data:index}} to={"/edit"} >
                            <div style={{backgroundColor:'white'}} onClick={()=>handleEdit(item.id,item.Name,item.Age,item.Course,item.Batch)}>Edit</div>
                           
                            </Link>
                       </td>
                     </tr>
                   )
                 })
               
               }
              </tbody>
         </table>
         </div>
        </>
    )
}
export default Student  