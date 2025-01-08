import { createTheme } from "@mui/material/styles";

//not use

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      lighter: "#D0ECFE",
      light: "#73BAFB",
      main: "#1877F2",
      dark: "#0C44AE",
      darker: "#042174",
    },
    gray: {
      50: "#FCFDFD",
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#1C252E",
      900: "#141A21",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderSpacing: "0 8px",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({theme})=>({
          backgroundColor: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.gray[50],
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root:({theme}) =>({
          borderBottom: "none",
          padding: theme.spacing(4),
          textAlign: "left",
        }),
        head:({theme})=> ({
          backgroundColor: theme.palette.gray[200],
          color: theme.palette.gray[600],
          fontWeight: "bold",
        }),
        body: ({theme})=>({
          color: theme.palette.gray[700],
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root:({theme})=> ({
          color: theme.palette.gray[500],
          "&.Mui-checked": {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        contained:({theme}) => ({
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        }),
        root:{
          borderRadius: "8px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root:({theme})=>({
          padding: theme.spacing(3),
          border: `1px solid ${theme.palette.gray[300]}`,
          borderRadius: "8px",
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: "350px",
          height: "100%",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root:({theme})=>({
          padding: theme.spacing(4),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontWeight: "bold",
          fontSize: "14px",
        },
        body2: {
          fontSize: "12px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root:({theme})=> ({
          position: "absolute",
          top: 8,
          right: 8,
          color: theme.palette.common.white,
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
});

export default theme;