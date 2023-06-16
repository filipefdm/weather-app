import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import theme from "@/styles/theme";
import "../styles/globals.css";
import createEmotionCache from "@/lib/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const cache = createEmotionCache();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default MyApp;
