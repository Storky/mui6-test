import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from "./theme.tsx";
import App from "src/App.tsx";
import CssBaseline from '@mui/material/CssBaseline';


createRoot(document.getElementById('root')!).render(
    <>
        <ThemeProvider theme={theme}>

        <StrictMode>
            <CssBaseline />

            <App />
        </StrictMode>
        </ThemeProvider>
    </>
)
