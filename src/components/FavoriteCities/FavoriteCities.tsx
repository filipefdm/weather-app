import { City } from '../../types/weatherTypes'
import { FavoritesCitiesContainer, SectionTitle } from './styles'
import { motion } from 'framer-motion'
import { FavoriteCity } from './FavoriteCity'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { lightTheme } from '../../styles/theme'

const FavoriteCities: React.FC<{
  favorites: City[]
  onRemoveFavorite: (city: City) => void
}> = ({ onRemoveFavorite }) => {
  const favoritesCities: City[] = useSelector(
    (state: RootState) => state.favorites.favorites
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FavoritesCitiesContainer theme={lightTheme}>
        <SectionTitle theme={lightTheme}>Cidades Favoritas</SectionTitle>
        {favoritesCities.map((favorite: City) => (
          <FavoriteCity
            key={favorite.id}
            favorite={favorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        ))}
      </FavoritesCitiesContainer>
    </motion.div>
  )
}

export default FavoriteCities
