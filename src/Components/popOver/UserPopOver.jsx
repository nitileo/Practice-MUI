import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Popover,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Home, Person, Settings } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";

const UserPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "user-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <PersonIcon/>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ padding: 2, minWidth: 200, textAlign:"center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Jaydon Frankie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            demo@minimals.cc
          </Typography>

          <Divider sx={{ my: 1 }} />

          <List>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>

          <Divider sx={{ my: 1 }} />
          <Typography
            variant="body2"
            color="error"
            sx={{ cursor: "pointer", textAlign: "center" }}
            onClick={handleClose}
          >
            Logout
          </Typography>
        </Box>
      </Popover>
    </div>
  );
};

export default UserPopover;
