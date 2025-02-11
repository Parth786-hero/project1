import * as React from "react";
import Card from "@mui/material/Card";
import { CardActions, Paper, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LineGraph from "../graphs/LineGraph";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

function Card3(props) {
  return (
    <Card sx={{ width: "100%", minHeight: {XS : "auto" , md : "61vh"} }} elevation={0}>
      <CardContent>
        <LineGraph />
      </CardContent>
    </Card>
  );
}
export default Card3;
