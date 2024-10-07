import { ThemeProvider } from "@mui/material";
import theme from "../styles/themes";
import HeaderFooterComponentWrapper from "../modules/components/HeaderFooter";
import './App.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderFooterComponentWrapper>
        <Component {...pageProps} />
      </HeaderFooterComponentWrapper>
    </ThemeProvider>
  )
}
