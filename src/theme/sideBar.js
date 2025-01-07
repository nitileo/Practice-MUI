import { createTheme } from "@mui/material";

//not use

const theme = createTheme({
    components: {
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