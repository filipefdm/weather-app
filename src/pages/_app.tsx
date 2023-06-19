import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'

import { Provider } from 'react-redux'
import { store } from '../store/store'

import { lightTheme, darkTheme } from '../styles/theme'

import createEmotionCache from '../lib/createEmotionCache'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

const cache = createEmotionCache()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider
          theme={store.getState().app.darkMode ? darkTheme : lightTheme}
        >
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
