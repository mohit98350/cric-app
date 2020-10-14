import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { getMatchDetail } from "../api/Api";

const MyCard = ({ match }) => {
  const [detail, setDatail] = useState({});
  const [open, setOpen] = useState(false);

  const getMatchCard = () => (
    <div>
      <Card
        style={{
          background:"#ADD8E6" ,
          marginTop: 15,
        }}
      >
        <CardContent >
          <Grid container justify="center" alignItems="center" spacing="7"  >
            <Grid item  sm="5"  style={{background:"dodgerblue"}}>
           
              <Typography style= {{  color:"white",fontWeight:"bold",borderRadius:"30px",background:"blue",padding:10,textAlign:"center"}}variant="h5" >{match["team-1"]}</Typography>
              <br/>
              <img  style={{width:'35%' ,display:"block",marginLeft:"auto",marginRight:"auto", background:"#bcc1f2"}} src={require("../img/cri.png")}/>
            </Grid>


            <Grid item  sm="2" style={{padding:'0rem 0rem',height:'30%'}} >
              <img
                alignItems="center"
                
                style={{width:'47%',padding:'25px',marginLeft:'16px'}}
                src={require("../img/vs.png")}
                
              />
            </Grid>
            <Grid item sm="5" style={{background:"palegreen"}} >
              <Typography  style={{color:"white",fontWeight:"bold",borderRadius:"30px",background:"green",padding:10,textAlign:"center"}}variant="h5">{match["team-2"]}</Typography>
              <br/>
              <img  style={{ width:'35%' ,display:"block",marginLeft:"auto",marginRight:"auto",background:"#a6aded"}}src={require("../img/cri.png")}/>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="center">
            <Button
            variant="contained"
              onClick={() => {
                showDetailBtnClicked(match["unique_id"]);
              }}
              
              color="primary"
            >
              Show Detail
            </Button>
            <Button
              style={{ marginLeft: 5 }}
               
              variant="contained"
              color="primary"
            
            >
              Starting time {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );

  const showDetailBtnClicked = (id) => {
    getMatchDetail(id)
      .then((data) => {
        console.log(data);
        setDatail(data);
        handleClickOpen();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    { getMatchCard()}
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{background:"palegreen"}} id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
        <DialogContent style={{background:"green"}}>
          <DialogContentText style={{color:"white"}} id="alert-dialog-description">
            <Typography>{detail.stat}</Typography>
            <Typography>
              Match
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {detail.matchStarted ? "Started" : "Still not started"}
              </span>
            </Typography>
            <Typography>
              Score
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {" "}
                {detail.score}
              </span>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyCard;