import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../api/api'



export const CreateBlogs = () => {

const [formData, setFormData]= useState({
  title:"",
  content:""
})

const navigate= useNavigate()


const onInput=(e)=>{
 const{name,value}=e.target

 setFormData({
  ...formData,
  [name]:value
 })
}
console.log(formData)

const onHandle= async (e)=>{
e.preventDefault()

if (!formData.title || !formData.content) {
      alert("Por favor, completa todos los campos.");
      return;
  }

try {
  const enviar = await axios.post(apiURL,{title:formData.title, content:formData.content})
if(enviar){ navigate("/")}
} catch (error) {
  console.log("tenemos un error de: ", error)
}}



  return (
    <div>
<form onSubmit={onHandle}>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input type="text" className="form-control" name='title' value={formData.title} onChange={onInput}/>
    <label className="form-label">content</label>
    <input type="text" className="form-control" name='content' value={formData.content} onChange={onInput}/>
  </div>

  <button type="submit" className="btn btn-primary">Crear</button>
</form>
    </div>
  )
}
