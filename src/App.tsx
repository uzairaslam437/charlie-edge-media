
import { Route,Routes ,BrowserRouter } from 'react-router-dom'
import './App.css'
import { Homepage } from './pages/Homepage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
