import { Routes, Route } from 'react-router-dom';
import './App.css';
import IntroComp from './IntroComp';

 
function App() {
  return (
    <Routes>
      <Route path='/' element={<IntroComp/>}/>
    </Routes>
  )
}

export default App;
