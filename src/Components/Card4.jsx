import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Card4(props) {
    const {text , num , para , theme} = props;
  return (
    <Card sx={{ width : "100%" , minHeight : 120  ,p : 2}} className={theme}>
      
      {/* <CardContent> */}
        <Typography gutterBottom variant="h6" component="div" sx={{fontWeight : "lighter"}}>
          {text}
        </Typography>
        <Typography gutterBottom variant="h4" component="div" sx={{fontWeight : "lighter!important"}}>
          {num} <span sx={{fontWeight : "lighter!important"}} className="light-font2">Users</span>
        </Typography>
       
        <Typography gutterBottom variant="body2" component="div" className="mini-text">
          {para}
        </Typography>
      {/* </CardContent> */}
      
    </Card>
  );
}
