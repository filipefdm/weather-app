import { Box, Button, Typography } from '@mui/material'
import { City } from '../../types/weatherTypes'
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../../store/slices/favoritesSlice'
import DeleteIcon from '@mui/icons-material/Delete'
import { AppDispatch } from '../../store/store'

interface FavoriteCityProps {
  favorite: City
  onRemoveFavorite: (city: City) => void
}

export const FavoriteCity: React.FC<FavoriteCityProps> = ({ favorite }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(favorite.id))
  }

  return (
    <Box
      key={favorite.id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 1,
        padding: 2,
        borderRadius: 4,
        boxShadow: 1,
        bgcolor: '#f8f8f8',
      }}
    >
      <Typography variant="inherit" sx={{ marginRight: 2 }}>
        {favorite.name}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        onClick={handleRemoveFavorite}
        sx={{ marginLeft: 'auto' }}
      >
        <DeleteIcon />
      </Button>
    </Box>
  )
}
