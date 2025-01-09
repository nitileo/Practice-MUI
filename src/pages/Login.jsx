import {
  Box,
  Button,
  Input,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const styleOverrides = theme.components[`LoginPage`]?.styleOverrides || {};
  const { root, loginBox, forgetPassword, socialBox } = styleOverrides;
  return (
    <Box sx={root}>
      <Box sx={loginBox}>
        <Typography variant="h5" mb={1}>
          Sign in
        </Typography>
        <Box display={"flex"} justifyContent={"center"} gap={1}>
          <Typography variant="body1" mb={1}>
            Don’t have an account?
          </Typography>
          <Typography variant="subtitle2" color="primary.main" ml={0.5}>
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
          <Box sx={forgetPassword}>
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
        <Box sx={socialBox}>
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
