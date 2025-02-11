import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {Paper , Box} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BungalowIcon from '@mui/icons-material/Bungalow';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import { useStore } from "../myStore";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  //   border : "2px solid green",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,

        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  // position : "fixed",
  // border : "10px solid red!important",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        zIndex: 1,
        ...openedMixin(theme),
        border: "2px solid red",
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        zIndex: 1,
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MyDrawer() {
  const bag = [< BungalowIcon sx={{color : "black"}}/> , <CategoryOutlinedIcon sx={{color : "black"}}/> , <InsightsOutlinedIcon sx={{color : "black"}}/> , <InboxIcon sx={{color : "black"}}/>];
  const curr = useStore((state) => state.open);
  const func = useStore((state) => state.updateOpen);
  const navigate = useNavigate();
  const theme = useTheme();
  // const [open, func] = React.useState(true);

  return (
    
    
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <Drawer variant="permanent" open={curr}>
          <DrawerHeader>
            <IconButton onClick={() => func(curr)}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          {/* <Divider /> */}
          <List>
            {["Home", "Products", "Analytics", "Settings"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block" }}
                onClick={() =>
                  navigate(
                    text === "Home"
                      ? "/"
                      
                      : `/${text.toLowerCase()}`
                  )
                }
              >
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,

                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    {bag[index]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    onClick={()=>{
                      func(!curr)
                    }}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                            
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
        </Drawer>
      </Box>

      
    
  );
}
