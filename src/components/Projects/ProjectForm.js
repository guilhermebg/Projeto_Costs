import style from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import {useState,useEffect} from 'react';
function ProjectForm({handleSubmit, btntext, projectData}) {

    const [categories, setCategories] = useState([]);
    const [project,setProject] = useState(projectData || {})

   useEffect(() => {
    fetch('http://localhost:5000/categories',{
        method:'GET',
        headers:{
            'Content-type':'application/json'
        }

    }).then((resp)=>resp.json())
    .then((data)=>{setCategories(data)})
    .catch((err)=>console.log(err))
       
   },[])

   const submit=(e)=>{
       e.preventDefault()
       console.log(project)
       //handleSubmit(project)
   }

   function handleChange(e){
       setProject({...project,[e.target.name]:e.target.value})
     
   }
   function handleCategory(e){
    setProject({
        ...project, 
        category:{
        id:e.target.value,
        name:e.target.options[e.target.selectdIndex].text,
    },})
  
}
    return (
        <form onSubmit={submit} className= {style.form}>
            <Input
            type= "text"
            text = "Nome do Projeto"
            name = "name"
            placeholder = "Insira o nome do Projeto"
            handleOnChange={handleChange}
            />
             <Input
            type= "number"
            text = "Orçamento do Projeto"
            name = "budget"
            placeholder = "Insira o orçamento do Projeto"
            handleOnChange={handleChange}
            />
           <Select 
           name = "category_id"
           text= "Selecione a Categoria"
           opt={categories}
           handleOnChange={handleCategory}
           value = {project.category ? project.category.id : ''}
           />
           <SubmitButton text={btntext} />
        </form>
    );
}

export default ProjectForm;