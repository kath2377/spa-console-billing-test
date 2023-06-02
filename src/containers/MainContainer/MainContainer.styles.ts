import { createNamedStyles } from "../../shared/interfaces/create_named_styles";

export const mainContainerStyles = createNamedStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
  },
  boxContainer: {
    display: "flex",
    height: "100%",
    position: "fixed",
    width: 1,
  },
  gridFilter: {
    display: "flex",
    justifyContent: "right",
  },
  boxContent: {
    height: "90%",
    marginBottom: "2em",
    padding: "48px 64px 48px 64px",
    width: "100%",
    backgroundColor: "#FAFCFD",
  },

  buttonLink: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },

  boxFooter: {
    bottom: "0",
    position: "fixed",
    width: "100%",
    zIndex: "1",
  },
  boxHeader: {
    bgcolor: {
      md: "#B6C5EE",
      sm: "lightskyblue",
    },
    display: "flex",
    flexDirection: {
      sm: "column",
    },
    heigth: {
      md: "10%",
      sm: "30%",
    },
    width: 1,
  },

  boxSidebar: {
    bgcolor: {
      md: "primary.light",
      sm: "secondary.main",
    },
    height: 1,
    width: {
      md: "10%",
      sm: "30%",
    },
  },
  divider: {
    border: "3px solid  #EEF6FF",
    marginTop: "-30px",
    marginBottom: "30px",
  },
  divider2: {
    border: "1px solid  #E2E8F0",
    marginBottom: "20px",
    marginTop: "20px",
  },
  buttonColor: {
    "&. MuiButtonBase-root-MuiButton-root": {
      marginLeft: "20px",
      marginRight: "20px",
    },
  },
});
