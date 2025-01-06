import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex={1} display="flex" flexDirection="column" sx={{ backgroundColor: "#f5f5f5" }} >
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
