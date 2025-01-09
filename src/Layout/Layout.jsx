import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        marginLeft="300px"
        bgcolor="#f9fafb"
      >
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
