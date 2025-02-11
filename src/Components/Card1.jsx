import * as React from "react";
import {Card , Stack} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import '../index.css';

function Card1(props) {
    const {text , para , amount , bgColor , icon , head} = props;
  return (
    <Card className={bgColor} sx={{ width: {xs : "100%" , md : "49%"}, minHeight: 150  , p : "0px 1rem"}} >
      <CardContent>
        <Stack spacing={1}>
          <Typography gutterBottom variant="h5" component="div">
            {icon}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <span>${amount} : {head}</span>
            
          </Typography>
          <Typography className="light-font" gutterBottom variant="body2" component="div">
            <span>{text}</span>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default Card1;
