import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import  React  from "react";
import SportsCricketIcon from '@material-ui/icons/SportsCricket/';
import Button from '@material-ui/core/Button';



const Navbar =()=>{
return(
    
    <AppBar position ="static">
    <Toolbar>

    <SportsCricketIcon/>

        <Typography varient="h6"><span style={{fontWeight:"bold"}}>Cricbuzz  </span> </Typography>
        <SportsCricketIcon/>
        
        <Button style={{marginLeft:"auto"}}><span style={{fontWeight:"Bold",fontStyle: "italic",color:"white"}}>LIVE</span></Button>
        
    </Toolbar>

    </AppBar>



   

)

};

export default Navbar;