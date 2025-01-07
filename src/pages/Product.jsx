import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material";
import ProductCard from "../Components/ProductCard";

const products = [
  {
    name: "Nike Air Force 1 NDESTRUKT",
    price: "$35.17",
    image: "https://via.placeholder.com/150",
    label: "SALE",
    colors: ["green"],
  },
  {
    name: "Nike Space Hippie 04",
    price: "$57.22",
    image: "https://via.placeholder.com/150",
    colors: ["black"],
  },
  {
    name: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
    price: "$64.78",
    oldPrice: "$64.78",
    image: "https://via.placeholder.com/150",
    label: "SALE",
    colors: ["pink"],
  },
  {
    name: "Nike Blazer Low 77 Vintage",
    price: "$50.79",
    image: "https://via.placeholder.com/150",
    label: "NEW",
    colors: ["blue", "black"],
  },
  {
    name: "Nike Blazer Low 77 Vintage",
    price: "$50.79",
    image: "https://via.placeholder.com/150",
    label: "NEW",
    colors: ["blue", "black"],
  },
  {
    name: "Nike Blazer Low 77 Vintage",
    price: "$50.79",
    image: "https://via.placeholder.com/150",
    label: "NEW",
    colors: ["blue", "black"],
  },
  {
    name: "Nike Blazer Low 77 Vintage",
    price: "$50.79",
    image: "https://via.placeholder.com/150",
    label: "NEW",
    colors: ["blue", "black"],
  },
  {
    name: "Nike Blazer Low 77 Vintage",
    price: "$50.79",
    image: "https://via.placeholder.com/150",
    label: "NEW",
    colors: ["blue", "black"],
  },
  {
    name: "Nike Blazer Low 77 Vintage",
    price: "$50.79",
    image: "https://via.placeholder.com/150",
    label: "NEW",
    colors: ["blue", "black"],
  },
];


const ProductGrid = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Products
      </Typography>
      <Grid2 container spacing={2} sx={{ p: 3 }}>
        {products.map((product, index) => (
          <Grid2 item xs={12} sm={6} md={4} lg={4} key={index}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProductGrid;
