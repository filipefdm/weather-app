import { Box, Button, Typography } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'

import { City } from '../../types/weatherTypes'

import { SearchHistoryContainer, SectionTitle } from './styles'
import { motion, AnimatePresence } from 'framer-motion'

import { addFavorite } from '../../store/slices/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorites } from '../../store/selectors/searchHistorySelectors'
import { AppDispatch } from '../../store/store'

import { lightTheme } from '../../styles/theme'

interface SearchHistoryProps {
  history: City[]
  onSearch: (city: string) => void
  onAddFavorite: (city: City) => void
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onSearch }) => {
  const dispatch = useDispatch<AppDispatch>()
  const favorites = useSelector(getFavorites)

  const handleAddFavorite = (city: City) => {
    dispatch(addFavorite(city))
  }

  return (
    <SearchHistoryContainer theme={lightTheme}>
      <SectionTitle theme={lightTheme}>
        Histórico de Cidades Pesquisadas
      </SectionTitle>
      <AnimatePresence>
        {history.map(city => {
          const isFavorite: boolean = favorites.some(
            (favoriteCity: City) => favoriteCity.id === city.id
          )

          return (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                component="div"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
                p={2}
                borderRadius={4}
                boxShadow={1}
                bgcolor="transparent"
              >
                <Typography variant="inherit">{city.name}</Typography>
                <Box display="flex" alignItems="center">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onSearch(city.name)}
                    sx={{ mr: 1 }}
                  >
                    Exibir
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleAddFavorite(city)}
                    sx={{ ml: 1 }}
                    disabled={isFavorite}
                  >
                    <StarBorderIcon sx={{ mr: 0.5 }} />
                  </Button>
                </Box>
              </Box>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </SearchHistoryContainer>
  )
}

export default SearchHistory
