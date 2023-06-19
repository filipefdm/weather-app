import { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import '../styles/globals.css'

import { CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { Provider } from 'react-redux'
import { store } from '../store/store'

import { lightTheme } from '../styles/theme'

import createEmotionCache from '../lib/createEmotionCache'

const poppins = Poppins({ subsets: ['latin'], weight: '200' })

const cache = createEmotionCache()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default MyApp
