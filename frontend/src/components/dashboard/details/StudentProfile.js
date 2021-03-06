import axios from 'axios';
import React,{useState,useEffect} from 'react';
const StudentProfile=()=>{
    const x=localStorage.getItem('token');
    const[details,setDetails]=useState({
        user:'',
        name:'',
        enr_num:'',
        course:[],
        program:'',
    });

    useEffect((num)=>{
        axios.get(`http://127.0.0.1:8000/person/student/profile/`,{
            headers: {
                'Authorization': `token ${x}`,
              }
        }).then((res)=>{
            // console.log(res.data[0]);
            // console.log(res);
            if(res.data){
                setDetails(res.data[0]);
            }
        },(error)=>{
            console.log(error.response);
            console.log(error.request);
            console.log(error.message);

        })
    },[]);
    return (
        <>
        <br/><br/><br/><br/>
            <h1>Profile</h1>

           {details&&<> <h1>User:{details.user}</h1>
            <h1>Name:{details.name}</h1>
            <h1>Enr number:{details.enr_num}</h1>
            <h1>Course:{details.course}</h1>
            <h1>Program:{details.program}</h1>
            </>
           }
        </>
    )
};

export default StudentProfile;