// import { Route, Routes } from 'react-router-dom';
import './App.css';
import IntroComp from './IntroComp';
import OurStory from './OurStory' 
import RocaList from './RocaList';
import Contact from './Contact';
 
function App() {
  return (
    <div>
      <IntroComp/>
      <OurStory/>
      <RocaList/>
      <Contact/>
    </div>
  )
}

export default App;
