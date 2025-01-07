import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
      // Name of the component
      MuiAppBar: {
        styleOverrides: {
          root: {
            // Some CSS
            fontSize: '1rem',
            backgroundColor: 'gray',
            colors:"white",
            display: 'flex',
            alignItems: 'flex-end',
          },
        },
      },
        MuiIconButton: {
            styleOverrides: {
            root: {
                color: 'white',
            },
            },
        },
    },
  });

    export default theme;