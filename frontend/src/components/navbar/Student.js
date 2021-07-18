import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../App.css';



//components
import StudentProfile from '../dashboard/details/StudentProfil2';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box >
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    

    justifyContent:"space-between",

  },
}));

export default function Navbar() {
  const is_student=localStorage.getItem('is_student');
  console.log(is_student);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const sytleTp={marginRight:100};


  const Logout=()=>{
    localStorage.setItem('token','');
    localStorage.setItem('email','');
    localStorage.setItem('is_student','');
    window.location.replace('/');
  }
  return (
    <div className={classes.root}  >
      <AppBar position="static" style={{ position: "fixed",top: 0    }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
        //   scrollButtons="off"
          aria-label="scrollable prevent tabs example"
         
        >
        
  

          <Tab   style={sytleTp} label="Todo List" icon={<PhoneIcon /> } aria-label="phone" {...a11yProps(0)} />
        
          <Tab style={sytleTp} label="Course" icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab style={sytleTp} label="Profile" icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
          <Tab style={{}} label="Logout" icon={<HelpIcon />} aria-label="help" {...a11yProps(3)} />
          
          {/* <Tab icon={<ShoppingBasket />} aria-label="shopping" {...a11yProps(4)} />
          <Tab icon={<ThumbDown />} aria-label="up" {...a11yProps(5)} />
          <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel  style={{marginTop:'15%'}}  value={value} index={0}>
        
        
          
        
        
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
      <br/><br/><br/>

        <StudentProfile/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Logout />
      </TabPanel>
     
    </div>
  );
}