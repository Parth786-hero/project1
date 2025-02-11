import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Animated from "../graphs/Animated";

export default function Card4() {
  return (
    <Card sx={{ width : "100%" , minHeight : "100%" }}>
      
      <CardContent>
        <Animated/>
       
      </CardContent>
      
    </Card>
  );
}
