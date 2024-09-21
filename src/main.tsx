import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from "./theme.tsx";


createRoot(document.getElementById('root')!).render(
    <>
        <ThemeProvider theme={theme}>

        <StrictMode>
            <App />

        </StrictMode>
        </ThemeProvider>
    </>
)
