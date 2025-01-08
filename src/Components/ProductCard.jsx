import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card>
      {product.label && (
        <Chip
          label={product.label}
          size="small"
          sx={{
            backgroundColor: product.label === "SALE" ? "#f50057" : "#4caf50",
          }}
        />
      )}
      <CardMedia component="img" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="body1" fontWeight="bold">
          {product.name}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
          mt={1}
        >
          <Box display={"flex"}>
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
          </Box>
          <Box mt={1} sx={{ marginY: "auto" }}>
            {product.oldPrice && (
              <Typography
                variant="body2"
                component="span"
                sx={{
                  textDecoration: "line-through",
                  color: "gray",
                  display: "inline",
                  marginRight: "8px",
                }}
              >
                {product.oldPrice}
              </Typography>
            )}
            <Typography
              variant="body2"
              component="span"
              sx={{
                fontWeight: "bold",
              }}
            >
              {product.price}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
