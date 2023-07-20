import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap'
import Login from './components/Login/Login'
import Playground from './components/Playground/Playground';
import Result from './components/Result/Result';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/playground' exact element={<Playground/>}/>
        <Route path='/result' exact element={<Result/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
