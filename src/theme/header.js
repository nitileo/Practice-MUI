import { createTheme } from "@mui/material";


//not use

const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
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