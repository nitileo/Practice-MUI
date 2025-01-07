import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
    return (
      <Card
        sx={{
          width: "350px", // Fixed width for each card
          height: "100%",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Space out content
          overflow: "hidden",
          position: "relative",
          margin: "0 auto", // Center cards horizontally if needed
        }}
      >
        {product.label && (
          <Chip
            label={product.label}
            color="secondary"
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: product.label === "SALE" ? "#f50057" : "#4caf50",
              color: "#fff",
            }}
          />
        )}
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="body1" fontWeight="bold" sx={{ fontSize: "14px" }}>
            {product.name}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={1}
            mt={1}
          >
            {product.colors.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: color,
                }}
              />
            ))}
            <Typography variant="body2" mt={1} sx={{marginY:"auto"}}>
              {product.oldPrice && (
                <Typography
                  variant="body2"
                  sx={{
                    textDecoration: "line-through",
                    color: "gray",
                    display: "inline",
                  }}
                >
                  {product.oldPrice}
                </Typography>
              )}
              {product.price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  };

  export default ProductCard