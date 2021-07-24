import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//components
import DeleteTask from '../Actions/DeleteTask';
import CompleteTask from '../Actions/CompleteTask';

const useStyles = makeStyles((theme) => ({
    root: {
    //   width: '100%',
    },
    button:{
        float:'right',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

const AllTask=(props)=>{
    const taskList=props.props;
    console.log(taskList);


    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //converting date to readable...
  const dateFormatter=(date)=>{
    console.log(date.slice(0,9)+date.slice(11,19));
    return date.slice(0,10)+' Time:'+date.slice(11,19);
  }
  return (
    <div className={classes.root}>
      
     {taskList&&
        taskList.map((task)=>{
            return (
                <Accordion expanded={expanded === `${task.id}`} onChange={handleChange(`${task.id}`)}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    >
                    
                        <Typography className={classes.heading}>{task.title}</Typography>
                        {task && task.due_date&&
                          <Typography className={classes.secondaryHeading}>
                              {'Due: '+dateFormatter(task.due_date)}
                          </Typography>
                        }
                       <DeleteTask props={task}/>
                       <CompleteTask props={task}/>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {task.desc}
                        </Typography>
                    </AccordionDetails>
            </Accordion>
            )
        })
     }
    </div>
  );
};

export default AllTask;