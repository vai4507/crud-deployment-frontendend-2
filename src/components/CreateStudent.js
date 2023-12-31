import StudentForm from "./StudentForm";
import {useState} from "react";
import Axios from 'axios';
function CreateStudent()
{
    const [arr,setArr]=useState([]);//arr=[Raj,raj@gmail.com,1]
    const getState=(childData)=>{ //childData=[Raj,raj@gmail.com,1]
        setArr(childData);
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={name:arr[0],email:arr[1],rollno:arr[2]};
        Axios.post("https://crud-deployment-backend-2-5suo.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} 
                         nameValue=""
                         emailValue=""
                         rollnoValue=""> 
                        Create Student
            </StudentForm>  
        </form>
    )
}
export default CreateStudent;