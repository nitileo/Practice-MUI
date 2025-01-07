import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <>
        <Box display="flex" sx={{color:"slategrey"}}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "transparent", 
              boxShadow: "none", 
              alignItems:"flex-end",
            }}
          >
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
    </>
  );
};
export default Header;
