import * as React from "react";
import Card from "@mui/material/Card";
import { CardActions, Paper, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

function Card2(props) {
  return (
    <Card
      className={props.bgColor}
      sx={{ height: {xs : "auto" , md : "11.1vh"} }}
      elevation={props.elevate}
    >
      {/* <CardContent> */}

      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "",
          p: ".5rem 1rem",
        }}
      >
        <div>
          <AccountTreeIcon />
        </div>
        <div className="">
          <Typography className="bold-text" variant="h5">
            $555
          </Typography>
          <Typography
            className="mini-text"
            variant="body2"
            sx={{ fontWeight: 200, textDecoration: "italic" }}
          >
            Future Estimation
          </Typography>
        </div>
      </Stack>
      {/* </CardContent> */}
    </Card>
  );
}
export default Card2;
