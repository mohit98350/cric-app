import React from 'react';
import {useEffect} from "react"
import {useState} from "react"
import Fragment from "react"
  
import "./App.css";
import MyCard from './components/MyCard';
import Navbar from "./components/Navbar";
import {getMatches} from"./api/Api";
import { Grid } from '@material-ui/core';

function App() {

const [matches ,setMatches]=useState([]);


useEffect(()=>{
getMatches()

.then((data)=> setMatches(data.matches))
.catch((error) => alert("could not load data"))


 }, []);



  return  (
    <div className="App">

    <Navbar/>

    <Grid container>
    <Grid sm="2">

    </Grid>
    <Grid sm="8">
    
    {matches.map((match)=>(
      
         <MyCard  match={match}/>
        
      
    
    ))}
    
    </Grid>


    </Grid>
    
    

    </div>

  );
    
  
}

export default App;
