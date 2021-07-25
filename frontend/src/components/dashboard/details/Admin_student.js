import React,{useEffect,useState} from 'react';
import Axios from 'axios';

//components
import AddStudent from '../../Actions/AddStudent';
import UpdateStudent from '../../Actions/updateStudent';
import DeleteStudent from '../../Actions/DeleteStudent';

//Material Ui
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Divider from '@material-ui/core/Divider';
import { createTheme, withStyles,  ThemeProvider } from '@material-ui/core/styles';
import { red ,green} from '@material-ui/core/colors';
import RetrieveStudent from '../../Actions/RetrieveStudent';




const Admin_Student=(props)=>{
    
    const listItems=props.props;
    // console.log(props.props)
    
    
    const ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText(red[500]),
          backgroundColor: red[400],
          marginTop:-50,
          marginLeft:40,
          '&:hover': {
            backgroundColor: red[700],
            
          },
        },
      }))(Button);
    const useStyles = makeStyles((theme) => ({
        
        root: {
          width: '100%',
          
        },
        heading: {
          fontSize: 19,
          flexBasis: '33.33%',
          flexShrink: 0,
        },
        secondaryHeading: {
          fontSize: 15,
          
        },

        accColor:{
            // backgroundColor:'#fffb50',
            background: 'linear-gradient(90deg, rgba(93,235,48,1) 0%, rgba(252,176,69,1) 100%, rgba(29,253,243,1) 100%)'
        },
      }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    return setExpanded(isExpanded ? panel : false);
  };


  

  
      const addStudent=()=>{
        window.location.replace('/home/addstudent');

    }
    
    return(
        <>

            <ColorButton
            variant="contained" color="primary" onClick={addStudent}>
               Add Student
           </ColorButton>
            
           {(
            <ul>{listItems.map((student,index)=>{
                
                return(
                    <>
                            {
                                //student.name+"  "+ faculty_course[index] +"  "+student.credit  
                                // student.name+'  '+student.faculty[].name+' '+student.credit
                                <div className={classes.root}  key={student.id}>
                                    <Accordion className={classes.accColor} expanded={expanded === index} onChange={handleChange(index)}>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        >
                                        <Typography className={classes.heading}>Student: {student.name}</Typography>
                                        <Typography className={classes.secondaryHeading}>Enrollment Number: {student.enr_num}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            <div>
                                                <span>
                                                
                                                <RetrieveStudent props={student}/>
                                                &nbsp;&nbsp;&nbsp;
                                                {student&&<UpdateStudent props={student}/>}
                                                &nbsp;&nbsp;&nbsp;
                                                <DeleteStudent props={student}/>
                                                &nbsp;&nbsp;&nbsp;
                                                {/* &nbsp;&nbsp;
                                                <button onClick={(()=>(setoperner(student.id),handleClickOpen()))}><VisibilityIcon/></button>
                                                {operner==student.id&&student&&<RetrieveCourse props={student} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>}
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                                <button onClick={(()=>(setoperner1(student.id),handleClickOpen()))}><CreateIcon/></button>
                                                {operner1==student.id&&student&&<UpdateCourse props={student} props1={listFaculty1} props2={listCategory} props3={listBuilding} open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>}
                                                
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <button onClick={(()=>(setoperner2(student.id),setOpen(true),setDelCourse(student.id)))} > <DeleteIcon/></button>
                                                {operner2==student.id && <DeleteCourse props={student} delCourse={delCourse} handleClose1={handleClose1} open={open}/>}
                                                
                                                 */}
                                                </span>
                                                
                                                
                                                 {/* <DeleteCourse props={student}/> */}
                                            </div>
                                            <div>
                                            
                                                <Grid container >
                                                    <Grid item>
                                                        <Tooltip disableFocusListener title="View">
                                                        <Button> View</Button>
                                                        </Tooltip>
                                                    </Grid>
                                                
                                                
                                                    <Grid item>
                                                        <Tooltip disableFocusListener title="Update">
                                                        <Button> Update</Button>
                                                        </Tooltip>
                                                    </Grid>
                                                
                                                
                                                    <Grid item>
                                                        <Tooltip disableFocusListener title="Delete">
                                                        <Button> Delete</Button>
                                                        </Tooltip>
                                                    </Grid>
                                                 
                                                </Grid>
                                            </div>
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Divider/>
                                </div>


                            }
                                    
                    </>
                );
            })
            }
            </ul>
             )

            }
            
        </>
    );
};


export default Admin_Student;