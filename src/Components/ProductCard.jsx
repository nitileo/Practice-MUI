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
              width={16} height={16} bgcolor={color} borderRadius={"50%"}
            />
          ))}
          </Box>
          <Box mt={1} sx={{ marginY: "auto" }}>
            {product.oldPrice && (
              <Typography
                variant="body2"
                component="span"
                display={"inline"}
                mr={2}
                color="gray"
                sx={{
                  textDecoration: "line-through",
                }}
              >
                {product.oldPrice}
              </Typography>
            )}
            <Typography
              variant="body2"
              component="span"
              fontWeight="bold"
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
