import {
  Box,
  ButtonBase,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import theme from "../theme/sideBar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="w-1/5 h-screen">
        <Box>
          <Link to="/">
            <IconButton>Logo</IconButton>
          </Link>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Team" />
              </ListItemButton>
            </ListItem>
            <Link to="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="User" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/product">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Product" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </div>
    </ThemeProvider>
  );
};
export default Sidebar;
