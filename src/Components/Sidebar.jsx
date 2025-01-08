import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navItems = [
    { label: "Team", link: "/" },
    { label: "User", link: "/" },
    { label: "Product", link: "/product" },
    { label: "Sign-in", link: "/login" },
  ];

  return (
    <Box
      width="300px"
      height="100vh"
      position="fixed"
      display="flex"
      flexDirection="column"
      p={4}
      zIndex={1200}
    >
      <Link to="/">
        <Avatar
          sx={{ width: 40, height: 40, bgcolor: "blue", marginBottom: "20px" }}
        >
          M
        </Avatar>
      </Link>
      <List>
        {navItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setActiveIndex(index)} 
                sx={{
                  borderRadius: 2,
                  backgroundColor:
                    activeIndex === index ? "#eff4fe" : "inherit",
                  color: activeIndex === index ? "#2a7df3" : "inherit",
                  "&:hover": {
                    backgroundColor:
                      activeIndex === index ? "#cedeff" : "#f5f5f5",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Box mt="auto" textAlign="center">
        <Typography variant="h6" color="textSecondary" mt={2}>
          More features?
        </Typography>
        <Typography variant="subtitle2" color="textPrimary">
          From only $69
        </Typography>
        <Box
          component="img"
          src="https://via.placeholder.com/150"
          alt="Feature graphic"
          mx="auto"
          width="65%"
          mt={2}
          borderRadius={2}
        />
        <Button variant="contained" sx={{ mt: 2 }}>
          Upgrade to Pro
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
