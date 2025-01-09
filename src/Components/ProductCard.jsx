import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const theme = useTheme();
  const styleOverrides = theme.components[`CustomCard`]?.styleOverrides || {};
  const { boxContent, productColorBox, oldPriceText } = styleOverrides;

  return (
    <Card>
      {product.label && (
        <Chip
          label={product.label}
          size="small"
          sx={{
            backgroundColor:
              product.label === "SALE" ? "#f50057" : "success.light",
          }}
        />
      )}
      <CardMedia component="img" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="body1" fontWeight="bold">
          {product.name}
        </Typography>
        <Box sx={boxContent}>
          <Box display={"flex"} marginLeft={2}>
            {product.colors.map((color, index) => (
              <Box key={index} bgcolor={color} sx={productColorBox} />
            ))}
          </Box>
          <Box mt={1} my="auto">
            {product.oldPrice && (
              <Typography variant="subtitle1" component="span" sx={oldPriceText}>
                {product.oldPrice}
              </Typography>
            )}
            <Typography variant="subtitle1" component="span" fontWeight="bold">
              {product.price}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
