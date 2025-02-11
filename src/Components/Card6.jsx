import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GeoChart from '../graphs/GeoChart';

export default function Card6() {
  return (
    <Card sx={{ width : "100%" , minHeight : {xs : "auto" , md : 300}}}>
      
      <CardContent>
        
        <GeoChart/>
       
      </CardContent>
      
    </Card>
  );
}
