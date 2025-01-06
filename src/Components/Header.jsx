import {
  AppBar,
  Box,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import theme from "../theme/header";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="w-full">
          <Box>
            <AppBar position="static">
              <Toolbar>
                <Box>
                  <IconButton aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <IconButton aria-label="Flag">
                    <FlagIcon />
                  </IconButton>
                  <IconButton aria-label="search">
                    <NotificationsIcon />
                  </IconButton>
                  <IconButton aria-label="search">
                    <PersonIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
          <Outlet/>
        </div>
      </ThemeProvider>
    </>
  );
};
export default Header;
