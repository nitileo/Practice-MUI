import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductCard from "../Components/ProductCard";
import { products } from "../data/data";
import { Grid2 } from "@mui/material";
import CartIcon from "../Components/CartIcon";
import SortProduct from "../Components/popover/SortProduct";

const ProductGrid = () => {
  return (
    <Box px={8} py={4}>
      <Typography variant="h4" fontWeight="bold" mb={3} paddingLeft={10}>
        Products
      </Typography>
      <CartIcon/>
      <Box textAlign="right" px={14}>
        <SortProduct/>
      </Box>
      <Grid2 container spacing={4} px={10} py={4}>
        {products.map((product, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box height={"100%"} display={"flex"} flexDirection={"column"}>
              <ProductCard product={product} />
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProductGrid;
