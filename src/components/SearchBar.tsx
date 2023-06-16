import { useState } from "react";
import { Box, TextField, Button, InputBase, InputAdornment } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const useStyles = makeStyles()((theme) => {
  return {
    searchElement: {
      position: "relative",
      height: "3.25rem",
      borderRadius: "26px",
      background: theme.palette.background.default,
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
      marginBottom: "1.4rem",
      display: "flex",
      alignItems: "center",
      zIndex: 1,
    },
    searchInput: {
      flex: 1,
      marginLeft: "1rem",
      height: "3.25rem",
      border: "none",
      backgroundColor: theme.palette.background.default,
      fontSize: "1.125rem",
      color: theme.palette.text.primary,
      width: "100%",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        color: theme.palette.text.secondary,
      },
    },
    searchIcon: {
      marginLeft: "1.2rem",
      fill: "#4a6fa1",
    },
    locationButton: {
      border: "none",
      cursor: "pointer",
      height: "100%",
    },
    locationIcon: {
      marginRight: "1.2rem",
      fill: "#4a6fa1",
    },
    searchResult: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      background: theme.palette.background.paper,
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
      width: "98%",
      left: "1%",
      top: "3.35rem",
      borderRadius: "5px",
      overflow: "hidden",
    },
    suggestionItem: {
      color: "#2079c9",
      textDecoration: "none",
      padding: "0.6rem 1rem",
      display: "block",
      textAlign: "left",
      borderBottom: `1px dotted ${theme.palette.divider}`,
      fontSize: "1rem",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
      },
    },
    outlined: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(0.5),
    },
  };
});

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <Box className={classes.searchElement}>
      <InputBase
        placeholder="Digite uma cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className={classes.searchInput}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon className={classes.searchIcon} />
          </InputAdornment>
        }
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        disabled={!city.trim()}
        className={classes.locationButton}
        startIcon={<LocationOnIcon className={classes.locationIcon} />}
      >
        Pesquisar
      </Button>
    </Box>
  );
};

export default SearchBar;
