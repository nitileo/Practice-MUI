import React from "react";
import { Badge, Box, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = () => {
  const theme = useTheme();
  const styleOverrides = theme.components[`Cart`]?.styleOverrides || {};
  const { root, BadgeSetting } = styleOverrides;

  return (
    <Box sx={root}>
      <Badge badgeContent={8} color="error" sx={BadgeSetting}>
        <ShoppingCartIcon sx={{ color: "black" }} />
      </Badge>
    </Box>
  );
};

export default CartIcon;
