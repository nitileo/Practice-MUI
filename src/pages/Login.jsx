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
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingX={2}
      minHeight="100vh"
      bgcolor={"whitesmoke"}
    >
      <Box
        maxWidth={400}
        minHeight={534}
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent={"space-evenly"}
        px={6}
        py={10}
        borderRadius={2}
        textAlign={"center"}
        bgcolor={"white"}
      >
        <Typography variant="h5" mb={1}>
          Sign in
        </Typography>
        <Box display={"flex"} justifyContent={"center"} gap={1}>
          <Typography variant="body1" mb={1}>
            Don’t have an account?
          </Typography>
          <Typography
            variant="subtitle2"
            color="primary.main"
            ml={0.5}
          >
            Get started
          </Typography>
        </Box>

        <Box mb={2}>
          <Input
            fullWidth
            placeholder="Email address"
            disableUnderline
            defaultValue="hello@gmail.com"
          />
          <Box
            display="flex"
            justifyContent="end"
            alignItems="center"
            marginBottom={2}
          >
            <Typography variant="body1" marginTop="4px">
              Forgot password?
            </Typography>
          </Box>
          <Input
            fullWidth
            type="password"
            placeholder="Password"
            defaultValue={"123456"}
            disableUnderline
          />
        </Box>
        <Link to="/">
          <Button variant="signIn">Sign in</Button>
        </Link>
        <Divider sx={{ my: 2 }}>OR</Divider>
        <Box display="flex" justifyContent="center" gap={2}>
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
