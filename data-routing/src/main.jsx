import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppRouter from './Routes/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
    <AppRouter />
)
