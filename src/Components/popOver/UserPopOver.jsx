import React, { useState } from "react";
import {
  IconButton,
  Popover,
  Typography,
  Box,
  ListItemIcon,
  ListItemText,
  Divider,
  MenuList,
  MenuItem,
  Button,
} from "@mui/material";
import { Home, Person, Settings } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";

const UserPopOver = () => {
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
        <PersonIcon />
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
        <Box p={3} minWidth={200} textAlign="left">
          <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
            Jaydon Frankie
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            demo@minimals.cc
          </Typography>
          <Divider sx={{ my: 1 }} />
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </MenuItem>
          </MenuList>

          <Divider sx={{ my: 1 }} />
          <Button fullWidth color="error" size="medium" variant="text" >
            Logout
          </Button>
        </Box>
      </Popover>
    </div>
  );
};

export default UserPopOver;
