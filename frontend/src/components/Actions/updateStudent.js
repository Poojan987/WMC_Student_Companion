import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import Axios from 'axios';



//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Alert from '@material-ui/lab/Alert';


import CreateIcon from '@material-ui/icons/Create';

import CancelIcon from '@material-ui/icons/Cancel';

function UpdateStudent1(props) {
    const[bol,setBol]=useState(0);
    // console.log(props);
    const {name,enr_num,id,program,user}=props.props;
    // console.log(props.props.id)
    const[detail,changeDetail]=useState({name:name,enr_num:enr_num,id:id,program:program,user:user});

    const onDetailChange=(e)=>{
        changeDetail((prevVal)=>({...prevVal,[e.target.name]:e.target.value}))
    };
    const x=localStorage.getItem('token');
    const[progOptions,setProgOptions]=useState([]);
    //fetching Programmes
    useEffect(() => {
        
        axios.get(`http://127.0.0.1:8000/person/program/`,{
        headers: {
            'Authorization': `token ${x}`,
          }
    }).then((res)=>{
    //    console.log(res)
        setProgOptions(res.data);
       
        
    },(error)=>{
        console.log('server error');
    });
    
       
    }, [])


    //Display With Material Ui

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        
      }));

    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

      const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setBol(0);
        setOpen(true); 
    }

    const num1=parseInt(detail.id,10);


    const post=()=>{
        axios.put(`http://127.0.0.1:8000/person/student/${num1}/`,{name:detail.name,enr_num:detail.enr_num,user:detail.user},{
            headers: {
                'Authorization': `token ${x}`,
              }
        }).then((res)=>{
            
            window.location.reload();
        },(error)=>{
            alert('Invalid credentials');
            console.log(error.message);console.log(error.response);
            
        });
    }
    
    
    
    return(
        <>
              <button onClick={()=>setBol(id)}> <CreateIcon/> </button>    
             {bol===id&&detail &&(
                   <>    

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Student</DialogTitle>
            <DialogContent>
            
            <TextField
                autoFocus margin="dense" id="name" label="Name" type="text" name="name"
                onChange={onDetailChange} value={detail.name}
                fullWidth
            />
            <TextField
                autoFocus margin="dense" id="enr_num" label="enr_num" type="text" name="enr_num"
                onChange={onDetailChange} value={detail.enr_num}
                fullWidth
            />
            
            
            
           
            
           
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            {detail.id &&
            <Button onClick={post} color="primary">
                Update
            </Button>
            }
            </DialogActions>
        </Dialog>
        
            </> 
            )
            }
        </>
    );
}

export default UpdateStudent1;