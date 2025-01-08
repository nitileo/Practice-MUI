import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  Box,
  InputBase,
  Button,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const TopSearchDrawer = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <SearchIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        hideBackdrop
        PaperProps={{
          sx: {
            padding: "8px 40px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
            marginLeft: "300px",
            backgroundColor: theme.palette.grey[50],
          },
        }}
      >
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
          gap={2}
        >
          <InputBase
            placeholder="Search..."
            fullWidth
            startAdornment={
              <SearchIcon sx={{ color: theme.palette.grey[500], marginRight: 1 }} />
            }
            sx={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
          />
          <Button variant="contained" color="secondary" onClick={toggleDrawer(false)}>
            Search
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default TopSearchDrawer;
