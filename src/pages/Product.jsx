import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material";
import ProductCard from "../Components/ProductCard";
import { products } from "../data/data";

const ProductGrid = () => {
  return (
    <Box sx={{ padding: "16px 40px" }}>
      <Typography variant="h5" fontWeight="bold" mb={3} paddingLeft={10}>
        Products
      </Typography>
      <Grid2 container spacing={3} sx={{ padding: "16px 40px" }}>
        {products.map((product, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProductGrid;
