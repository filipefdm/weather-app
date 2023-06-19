import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { setCity, clearCity } from '../../store/slices/searchBarSlice'
import { getSearchBarCity } from '../../store/selectors/searchBarSelectors'

import { Button, InputAdornment } from '@mui/material'
import { SearchElement, SearchInput } from './styles'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import SearchIcon from '@mui/icons-material/Search'

import { motion } from 'framer-motion'
import { lightTheme } from '../../styles/theme'

interface SearchBarProps {
  onSearch: (city: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const city = useSelector(getSearchBarCity)
  const dispatch = useDispatch<AppDispatch>()

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city)
      dispatch(clearCity())
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const searchBarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={searchBarVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <SearchElement theme={lightTheme}>
        <InputAdornment position="start">
          <SearchIcon color="primary" fontSize="medium" sx={{ ml: '2rem' }} />
        </InputAdornment>
        <SearchInput
          theme={lightTheme}
          placeholder="Digite uma cidade"
          value={city}
          onChange={e => dispatch(setCity(e.target.value))}
          onKeyDown={handleKeyPress}
          data-testid="search-input"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          disabled={!city.trim()}
          component="span"
          sx={{ borderRadius: '5rem', mr: '1rem' }}
          data-testid="submit-button"
        >
          <LocationSearchingIcon />
        </Button>
      </SearchElement>
    </motion.div>
  )
}

export default SearchBar
