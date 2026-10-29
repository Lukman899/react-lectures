import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import {ThemeProvider } from './context/ThemeContext.jsx'
import ChangeTheme from './components/ChangeTheme.jsx'

export let UserContext = createContext(null)
let username = "Lukman"

createRoot(document.getElementById('root')).render(
  <>
  {/* <UserContext.Provider value={username}>
    <App />
    <Navbar />
  </UserContext.Provider> */}  {/*in RV 18 or older*/}


   {/* <UserContext value={username}>
    <App />
  </UserContext>  in RV 19 or latest */}

  <ThemeProvider>
    <App />
    <ChangeTheme />
  </ThemeProvider>
    

  </>
)