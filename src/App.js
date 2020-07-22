import React from 'react';
import Menu from './components/menuBar/Menu'
import ImgMediaCard from './components/ImgMediaCard'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

function App() {
  return (
    <div >
     <Menu/>
     <br />
     
        <Grid container spacing={0} style={{marginLeft: "10px", marginRight: "0px", marginBottom: "10px"}}>
          
          <Grid item xs={2}>
            
          </Grid>
          <Grid item xs={8}>
          <Divider /><br/>  
          <Grid container spacing={4}>

            <Grid item xs={"4"}>
              < ImgMediaCard/>
            </Grid>
            <Grid item xs={"4"}>
              < ImgMediaCard/>
            </Grid>
            <Grid item xs={"4"}>
              < ImgMediaCard/>
            </Grid>
            <Grid item xs={"4"}>
              < ImgMediaCard/>
            </Grid>
            <Grid item xs={"4"}>
              < ImgMediaCard/>
            </Grid>
          </Grid>
          
          </Grid>
          <Grid item xs={1}>
          
          </Grid>
      </Grid>
     <br/>
     
    </div>
  );
}

export default App;
