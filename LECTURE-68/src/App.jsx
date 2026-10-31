import { Route, Routes } from 'react-router'
import { AuthDashboard } from './components/Dashboard'
import Navbar from './components/Navbar'
import { AuthProfile } from './components/Profile'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element="Home"/>
        <Route path='/dashboard' element={<AuthDashboard/>}/>
        <Route path='/profile' element={<AuthProfile name={"Lukman"} role={"Student"}/>}/>
      </Routes>
    </div>
  )
}

export default App