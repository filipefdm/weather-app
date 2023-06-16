import { Box, Button, Typography } from "@mui/material";
import { WeatherData } from "@/types/weatherTypes";
import { City } from "@/pages";
import { useDispatch } from "react-redux";

interface FavoritesProps {
  favorites: City[];
  onRemoveFavorite: (city: City) => void;
}

const Favorites: React.FC<FavoritesProps> = ({
  favorites,
  onRemoveFavorite,
}) => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 1 }}>
        Favoritos
      </Typography>
      {favorites.map((city) => (
        <Box
          key={city.id}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            {city.name}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onRemoveFavorite(city)}
          >
            Remover dos Favoritos
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Favorites;
