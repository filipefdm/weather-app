import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { setCity, clearCity } from '../../store/slices/searchBarSlice'

import { Box, Button, InputBase, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { useStyles } from './styles'
import { motion } from 'framer-motion'

interface SearchBarProps {
  onSearch: (city: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const city = useSelector((state: RootState) => state.searchBar.city)
  const dispatch = useDispatch<AppDispatch>()

  const { classes } = useStyles()

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
      <Box className={classes.searchElement}>
        <InputBase
          placeholder="Digite uma cidade"
          value={city}
          onChange={e => dispatch(setCity(e.target.value))}
          className={classes.searchInput}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          }
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="text"
          color="primary"
          onClick={handleSearch}
          disabled={!city.trim()}
          className={classes.locationButton}
        >
          Pesquisar
        </Button>
      </Box>
    </motion.div>
  )
}

export default SearchBar
