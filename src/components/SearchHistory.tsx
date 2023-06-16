import { Box, Button, Typography } from "@mui/material";
import { City } from "@/pages";

interface SearchHistoryProps {
  history: City[];
  onSearch: (city: string) => void;
  onAddFavorite: (city: City) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({
  history,
  onSearch,
  onAddFavorite,
}) => {
  return (
    <Box mt={2}>
      <Typography variant="h6">Histórico de Pesquisas</Typography>
      {history.map((city) => (
        <Box key={city.id} display="flex" alignItems="center" mt={1}>
          <Typography>{city.name}</Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => onSearch(city.name)}
            sx={{ ml: 1 }}
          >
            Exibir
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => onAddFavorite(city)}
            sx={{
              ml: 1,
              ...(city.isFavorite && {
                color: "#f44336",
              }),
            }}
          >
            {city.isFavorite
              ? "Remover dos Favoritos"
              : "Adicionar aos Favoritos"}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default SearchHistory;
