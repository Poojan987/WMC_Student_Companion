import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";

//make user,add that user to student
const AddStudent=()=>{
    const x=localStorage.getItem('token');
    let history = useHistory();

    function handleClick() {
        history.push("/home");

    }
    const[progOptions,setProgOptions]=useState([]);
    const[detail,setDetail]=useState({
        email:'',
        password:'',
        name:'',
        enr_num:'',
        program:1,

    });

    

    //fetching Programmes
    useEffect(() => {
        
        axios.get(`http://127.0.0.1:8000/person/program/`,{
        headers: {
            'Authorization': `token ${x}`,
          }
    }).then((res)=>{
       
        setProgOptions(res.data);
       
        
    },(error)=>{
        console.log('server error');
    });
    
       
    }, [])
    


    const changeDetail=(event)=>{
        
        setDetail((previousVal)=>({...previousVal,[event.target.name]:event.target.value})
            
        )
        
        
    };
    
    
    const send=()=>{
        const body={ email:detail.email,
                            password:detail.password,name:detail.name,enr_num:detail.enr_num};
        axios.post(`http://127.0.0.1:8000/person/register/`,body,{
            headers: {
                'Authorization': `token ${x}`,
              }
           
            
        }).then((res)=>{
            console.log(res);
            axios.post(`http://127.0.0.1:8000/person/students/`,{
            email:detail.email,
            name:detail.name,
            enr_num:detail.enr_num,
            program:detail.program,
           },{
                headers: {
                    'Authorization': `token ${x}`,
                  }
                 
            }).then((res)=>{
                console.log('success... :).');
                window.location.replace('/home');
            
            },(error)=>{
                alert('Please enter valid and unique Name & Enr_num');
            //     console.log(error.message);console.log(error.response);
            // console.log(error.request);
                // console.log('Student creation error');
            })
        },(error)=>{
            // console.log(error.message);console.log(error.response);
            // console.log(error.request);
            alert('Please enter valid and unique Email & Password');
            // console.log('User creation error.');
        })
    };

    return (
        <>
            <h1>Add Student</h1>

        <label htmlFor="email">Email:</label>
            <input type='email' name='email' label='email' onChange={changeDetail} value={detail.email} ></input>
            <br/><br/>

            <label htmlFor="password">Password:</label>
            <input type='password' name='password' label='Password' onChange={changeDetail} value={detail.password} ></input>
            <br/><br/>

            <label htmlFor="name">Name:</label>
            <input type='text' name='name' label='name' onChange={changeDetail} value={detail.name} ></input>
            <br/><br/>

             <label htmlFor="enr_num">Enrollment Number: </label>
            <input type='text' name='enr_num' label='enr_num' onChange={changeDetail} value={detail.enr_num} ></input>
            <br/><br/> 

            <span>Programme:  </span>
            {progOptions &&       
                <select label='program' name='program' onChange={changeDetail} value={detail.program.id}   >
                    {
                        
                        
                        progOptions.map((choice)=>{
                            
                            return <option key={choice.id} value={choice.id} >{choice.name}</option>
                            
                            
                        })
                        
                    }
               
               
            </select>
            
    } <br/>




          
            <br/><br/> 
            
            <button onClick={handleClick}>Cancel</button>
            <button onClick={send}>Submit</button>
            
        </>
    );
};

export default AddStudent;