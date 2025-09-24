import './App.css'
import CustomHook from './components/CustomHook'
import Logics from './components/Logics'
import Useeffect from './components/useeffect'
import Useformstatus from './components/Useformstatus'
import Useref from './components/Useref'
import HomePage from './pages/HomePage'


function App() {

  return (
    <>
     <h1 className=''>react + vite</h1>
     <CustomHook/>
     <Useformstatus/>
     <HomePage/>
     <Logics/>
     <Useeffect/>
     <Useref/>
     
    </>
  )
}

export default App
