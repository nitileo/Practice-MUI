import {
  ButtonBase,
  MenuItem,
  MenuList,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const SortProduct = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const sortText = ["Feature", "Newest", "Price: High-Low", "Price: Low-High"];

  const [name, setName] = useState("Feature");

  const handleSort = (text) => {
    setName(text);
    handleClose();
  };

  const theme = useTheme();
  const styleOverrides =
    theme.components["SortProductBar"]?.styleOverrides || {};
  const { MenuListSetting } = styleOverrides;

  return (
    <>
      <ButtonBase onClick={handleClick}>
        <Typography variant="subtitle2" color="initial">
          Sort By : {""}
        </Typography>
        <Typography
          variant="subtitle2"
          component="span"
          color="text.secondary"
          ml={1}
        >
          {name}
        </Typography>
      </ButtonBase>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuList sx={MenuListSetting}>
          {sortText.map((text, index) => (
            <MenuItem key={index} onClick={() => handleSort(text)}>
              <Typography variant="body2" color="text.secondary">
                {text}
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
};
export default SortProduct;
