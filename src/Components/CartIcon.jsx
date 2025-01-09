import React from "react";
import { Badge, IconButton, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = () => {
  return (
    <Box
      sx={{
        right: 0,
        top: 112,
        zIndex: 999,
        display: 'flex',
        cursor: 'pointer',
        position: 'fixed',
        color: 'text.primary',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        bgcolor: 'white',
        padding: "8px 24px 8px 16px",
        '&:hover': {opacity: 0.8}
      }}
    >
        <Badge
          badgeContent={8} 
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              right: 4,
              top: 4,
              border: "2px solid white",
              padding: "0 4px",
            },
          }}
        >
          <ShoppingCartIcon sx={{ color: "black" }} />
        </Badge>
    </Box>
  );
};

export default CartIcon;
