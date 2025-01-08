import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import NotificationsIcon from "@mui/icons-material/Notifications";

import UserPopOver from "../Components/popOver/UserPopOver";

const Header = () => {
  return (
    <>
      <Box display="flex">
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" gap={2}>
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
              <IconButton aria-label="Flag">
                <FlagIcon />
              </IconButton>
              <IconButton aria-label="search">
                <Badge color="primary" badgeContent={2}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
                <UserPopOver/>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
