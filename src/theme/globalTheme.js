import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
        root: {
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          padding: "16px",
          textAlign: "left",
        },
        head: {
          backgroundColor: "#f5f5f5",
          color: "#333",
          fontWeight: "bold",
        },
        body: {
          color: "#555",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#9e9e9e",
          "&.Mui-checked": {
            color: "#1976d2",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "black",
          color: "#fff",
        },
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        },
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
        root: {
          padding: "16px",
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
          color: "#fff",
        },
        colorSecondary: {
          backgroundColor: "#4caf50",
        },
      },
    },
  },
});

export default theme;
