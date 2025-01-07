import React from "react";
import {
  Box,
  Button,
  Input,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "linear-gradient(to right, #f8f9fa, #e0e0e0)",
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Sign in
        </Typography>
        <Typography variant="body2" mb={2}>
          Don’t have an account?
        </Typography>

        <Box mb={2}>
          <Input
            fullWidth
            placeholder="Email address"
            disableUnderline
            defaultValue="hello@gmail.com"
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              px: 1.5,
              py: 1,
              mb: 2,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="body2">Forgot password?</Typography>
          </Box>
          <Input
            fullWidth
            type="password"
            placeholder="Password"
            disableUnderline
            sx={{
              position: "relative",
            }}
          />
        </Box>
        <Link to="/">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Sign in
          </Button>
        </Link>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton>
            <GoogleIcon color="primary" />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
