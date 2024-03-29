import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "white",
        fontSize: "15px",
    },
    icon:{
        color: "white"
    }
    
}));

function DrawerComponent() {
    const classes = useStyles();
    
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div  style={{ backgroundColor: "#08022A" }}>
      <Drawer
      
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        
      >
        <List style={{ backgroundColor: "#08022A", height:"100%"}}>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/events" className={classes.link}>Events</Link>
            </ListItemText>
          </ListItem>
          <Divider/>

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/community" className={classes.link}>Community</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/team" className={classes.link}>Team</Link>
            </ListItemText>
          </ListItem>
          <Divider/>          
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </div>
  );
}
export default DrawerComponent;
