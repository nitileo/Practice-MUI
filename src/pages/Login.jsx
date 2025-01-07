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
        backgroundColor: "linear-gradient(to right, #f8f9fa, #df8c5b)",
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          minHeight: 534,
          width: "100%",
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          padding: "40px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
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
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="body2" marginTop="4px">
              Forgot password?
            </Typography>
          </Box>
          <Input
            fullWidth
            type="password"
            placeholder="Password"
            defaultValue={"123456"}
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
