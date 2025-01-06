import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../theme/sideBar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding:"4px",
        paddingY:"16px"
      }}
    >
      <Link to="/">
        <Avatar sx={{ width: 40, height: 40, bgcolor: "blue",marginX: "auto"}}>M</Avatar>
      </Link>
      <List >
        <ListItem >
          <ListItemButton>
            <ListItemText primary="Team" />
          </ListItemButton>
        </ListItem>
        <Link to="/">
          <ListItem >
            <ListItemButton sx={{borderRadius:2}}>
              <ListItemText primary="User" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/product">
          <ListItem >
            <ListItemButton sx={{borderRadius:2}}>
              <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem >
            <ListItemButton sx={{borderRadius:2}}>
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
          sx={{ width: "100%", mt: 2, borderRadius: 2 }}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Upgrade to Pro
        </Button>
      </Box>
    </Box>
  );
};
export default Sidebar;
