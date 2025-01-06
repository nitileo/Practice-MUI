import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
      // Name of the component
      MuiBox: {
        styleOverrides: {
          root: {
            flexDirection: 'row',
            position: 'fixed',
            height: '100%',
          },
        },
      },
    },
  });

export default theme;