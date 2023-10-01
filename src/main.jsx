import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContextProvider from './context/theme'
import ObserverContextProvider from './context/observer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ObserverContextProvider>
        <App />
      </ObserverContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
