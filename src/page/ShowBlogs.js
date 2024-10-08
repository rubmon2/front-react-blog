import axios from "axios"
import {Link} from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { apiURL } from "../api/api"






//componente
export const ShowBlogs = () => {

    //estado
const [blogs, setBlogs]= useState([])


//get todos
const getBlog=async()=>{
try {
 const res= await axios.get(apiURL)
 setBlogs(res.data)
} catch (error) {
    console.error("Hay un errore de : ",error.axioserror)
}}

//useeffect
useEffect(()=>{getBlog()},[])

const deleteBlog = async (id) => {
  try {
      await axios.delete(`${apiURL}/${id}`);
      getBlog(); // Recargar la lista después de eliminar
  } catch (error) {
      console.error("Error al eliminar el blog: ", error.message);
  }
};

//borrar onclick
const onDelete=(id)=>{
deleteBlog(id)

}



console.log(blogs)
  return (
   <div>
 <h1> Home Blogs</h1>
 <table className="table">
    <thead>
      <tr>
        <th scope="col">TAREA</th>
        <th scope="col">CONTENIDO</th>
        <th scope="col">BORRAR</th>
        <Link to={"/create"} className="btn btn-primary">Crear Blogs</Link>
      </tr>
    </thead>
    <tbody>
    {blogs.map(blog=>(
            <tr key={blog.id}>
                <th scope="row">{blog.title}</th>
                <td>{blog.content}</td>
               <td> <button onClick={()=>onDelete(blog.id)} className="btn btn-outline-danger">DELETE</button></td>
               <td ><Link to={`/edit/${blog.id}`} className="bt btn-primary">Edit</Link></td>

            </tr>
                ))}
    </tbody>    


 </table>
   </div>
  )
}
