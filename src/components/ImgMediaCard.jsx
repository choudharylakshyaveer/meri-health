import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "50px"
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          src="https://lh3.googleusercontent.com/proxy/VqxLce7dPaQk7alxKyOyICozztG9idkUTe39CznT16HRmV_UaN7kkR1s-glyo9tbSBOPiBDJHYa4kMXVAXLsEhicnki6M-7qct1HVVmhcZONeR3g"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarcticasdfsadfsdfvsdfgdfsg sf gs fh s hsg fg hsdfb
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={()=>{ alert('alert'); }}  >
          Learn More
        </Button>
      </CardActions>
    </Card>

    
  );
}