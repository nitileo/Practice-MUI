import React, { useState } from "react";
import {
  Box,
  IconButton,
  Popover,
  Typography,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      {/* Icon Button to trigger the Popover */}
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      {/* Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box p={2}>
          <MenuItem>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body1">Edit</Typography>
          </MenuItem>
          <MenuItem sx={{ color: "error.main" }}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" sx={{ color: "error.main" }} />
            </ListItemIcon>
            <Typography variant="body1">Delete</Typography>
          </MenuItem>
        </Box>
      </Popover>
    </Box>
  );
};

export default ActionPopover;
