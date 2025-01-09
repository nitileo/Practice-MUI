import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans Variable", "Roboto", "Helvetica", "Arial", sans-serif',
    h1:{
      fontWeight: 800,
      fontSize: "40px",
    },
    h2:{
      fontWeight: 800,
      fontSize: "32px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "24px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "24px",
    },
    h5: {
      fontWeight: 700,
      fontSize: "20px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "18px",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "16px",
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "14px",
    },
    body1: {
      fontWeight: "normal",
      fontSize: "16px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
    },
    caption: {
      fontSize: "12px",
    },
  },
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
    warning: {
      main: "#FF9800", 
      light: "#FFC947",
      dark: "#ff5630",
    },
  },
});

const globalTheme = createTheme(theme, {
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.gray[100],
          },
        },
      },
    },
    MuiToolbar:{
      styleOverrides:{
        root:{
          padding:theme.spacing(6,6),
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          padding: theme.spacing(4),
          textAlign: "left",
        },
        head: {
          backgroundColor: theme.palette.gray[200],
          color: theme.palette.gray[600],
          fontWeight: "bold",
        },
        body: {
          color: theme.palette.gray[700],
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: theme.palette.gray[500],
          "&.Mui-checked": {
            color: theme.palette.primary.main,
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "signIn" },
          style: {
            width: "100%",
            fontWeight: "bold",
            fontSize: "15px",
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            padding: theme.spacing(2, 5.5),
            "&:hover": {
              backgroundColor: theme.palette.gray[700],
            },
          },
        },
      ],
      styleOverrides: {
        contained: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          fontWeight: "bold"
        },
        root: {
          borderRadius: "8px",
        },
        containedSecondary:{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          fontWeight: "bold"
        }
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
          border: `1px solid ${theme.palette.gray[300]}`,
          borderRadius: "8px",
          backgroundColor: theme.palette.common.white
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          width: "324px",
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
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(4),
        },
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
        root: {
          position: "absolute",
          top: 8,
          right: 8,
          color: theme.palette.common.white,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          alignItems: "flex-end",
          padding: theme.spacing(2,10)
        },
      },
    },
    MuiTablePagination:{
      styleOverrides:{
        input:{
          padding: 0,
          border: "none"
        }
      }
    },
    MuiMenuItem:{
      styleOverrides:{
        root:{
          borderRadius: "8px"
        }
      }
    },
    MuiPopover:{
      styleOverrides:{
        paper:{
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }
      }
    },
    MuiPaper:{
      styleOverrides: {
        root: {
          "&.MuiTableContainer-root": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
          },
        },
      },
    },
    MuiBadge:{
      styleOverrides: {
        badge: {
          backgroundColor: theme.palette.warning.dark, 
          color: theme.palette.common.white, 
        },
      },
    },
    CustomCard:{
      styleOverrides:{
        boxContent:{
          display:"flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          mt: 1
        },
        productColorBox:{
          width: 16,
          height: 16,
          border: 2,
          borderRadius: 2,
          borderColor: theme.palette.gray[50],
          ml: theme.spacing(-1.5)
        },
        oldPriceText:{
          display: "inline",
          mr: 2,
          color: "text.secondary",
          textDecoration: "line-through"
        }
      }
    }
  },
});

export default globalTheme;
