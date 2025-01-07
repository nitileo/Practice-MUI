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
  return (
    <Box
      sx={{
        width: "300px", // Fixed width
        height: "100vh", // Full viewport height
        position: "fixed", // Fixed position
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff", // Background color
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for better separation
        padding: "16px",
        zIndex: 1200, // Ensures it stays on top of other elements
      }}
    >
      <Link to="/">
        <Avatar
          sx={{ width: 40, height: 40, bgcolor: "blue", marginX: "auto" }}
        >
          M
        </Avatar>
      </Link>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Team" />
          </ListItemButton>
        </ListItem>
        <Link to="/">
          <ListItem>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemText primary="User" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/product">
          <ListItem>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/login">
          <ListItem>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemText primary="Sign-in" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Box sx={{ mt: "auto", textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          More features?
        </Typography>
        <Typography variant="h6" color="textPrimary">
          From only $69
        </Typography>
        <Box
          component="img"
          src="https://via.placeholder.com/150"
          alt="Feature graphic"
          sx={{ width: "70%", mt: 2, borderRadius: 2, marginX: "auto" }}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Upgrade to Pro
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
