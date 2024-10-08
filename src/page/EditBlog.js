import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from '../api/api'



export const EditBlog = () => {


    //estado blogs
const [formData, setFormData]= useState({
  title:"",
  content:""
})

//navigate
const navigate= useNavigate()


//obtener id
const {id}=useParams()


//fnx get blog
const updateBlog=async(e)=>{
    e.preventDefault()

    try {
     await axios.put(`${apiURL}${id}`,{
        title:formData.title,
        content:formData.content
     })
     
     navigate('/'); // Redirige al inicio
     
    } catch (error) {
        console.error("Error del servidor:", error.response.data);    }}




//useeffect
useEffect(()=>{getBlog()},[])

const getBlog=async()=>{
    const res =await axios.get(apiURL+id)
    const blog =res.data[0]
  const {title,content}=blog
  setFormData({title,content})
}


//oninput change
const onInput=(e)=>{
 const{name,value}=e.target

 setFormData({
  ...formData,
  [name]:value
 })
 console.log(formData)
}



  return (
    <div>
<form onSubmit={updateBlog}>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input  type="text" className="form-control" name='title' value={formData.title} onChange={onInput}/>
    <label className="form-label">content</label>
    <input type="text" className="form-control" name='content' value={formData.content} onChange={onInput}/>
  </div>

  <button type="submit" className="btn btn-primary">Editar</button>
</form>
    </div>
  )
}
