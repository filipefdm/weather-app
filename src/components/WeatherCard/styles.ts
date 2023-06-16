import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    weatherContainer: {
      backgroundColor: theme.palette.background.default,
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
      borderRadius: "15px",
      padding: "1.5rem 2rem",
      display: "flex",
      flexDirection: "column",
      transition: "box-shadow 0.3s ease",
      "&:hover": {
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      },
    },
    sectionTitle: {
      fontWeight: 500,
      fontSize: "1.125rem",
      color: theme.palette.primary.main,
      marginBottom: "1rem",
    },
    currentWeatherContainer: {
      display: "flex",
      flexWrap: "wrap",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
      },
    },
    currentWeatherStatus: {
      display: "flex",
      flexDirection: "column",
      margin: "2rem 1.5rem",
      width: "25rem",

      [theme.breakpoints.down("sm")]: {
        margin: "2rem 0rem",
      },

      "& h4": {
        fontWeight: 600,
        fontSize: "1.25rem",
        color: "#396bae",
        marginBottom: "1rem",
      },
      "& span": {
        fontWeight: 200,
        fontSize: "7rem",
        color: "#4a6fa1",
        marginLeft: "1.5rem",
        lineHeight: 1,
        "& sup": {
          lineHeight: 0,
        },
      },
      "& h6": {
        fontSize: "1.375rem",
        textAlign: "left",
        color: "#7b98b2",
      },
    },
    currentWeatherInfo: {
      display: "flex",
      flexDirection: "column",
      margin: "2rem 1rem",
      marginLeft: "2rem",
    },
    feelsLike: {
      fontSize: "1.25rem",
      color: "#4a6fa1",
      marginBottom: "1.5rem",
    },
    highLowContainer: {
      display: "flex",
      marginBottom: "2rem",
      width: "2rem",
    },
    weatherDegree: {
      display: "flex",
      alignItems: "center",
      fontWeight: 500,
      fontSize: "1.25rem",
      color: "#3a86ca",
      marginTop: "0.8rem",
      marginRight: "2.5rem",
      "& svg": {
        fill: theme.palette.primary,
        marginRight: "1rem",
      },
    },
    infoRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginBottom: "0.8rem",
      "& div": {
        color: theme.palette.secondary,
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        width: "8rem",
      },
      "& svg": {
        fill: theme.palette.error,
        marginRight: "1rem",
        width: "1.6rem",
        marginLeft: "-0.3rem",
      },
      "& span": {
        color: "#3080c8",
        fontWeight: 500,
        fontSize: "1rem",
      },
    },
    weatherIcon: {
      "& img": {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginRight: theme.spacing(2),
      },
    },
  };
});
