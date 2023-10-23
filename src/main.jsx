import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ShoppingCartProvider } from './Context/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </React.StrictMode>,
)
