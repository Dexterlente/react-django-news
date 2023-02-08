import './App.css';
import NavBar from './Components/NavBar'
import Cover from './Components/Cover'
import MainBody from './Pages/MainBody'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Cover />
      <MainBody />
      <Footer />      
    </div>
  );
}

export default App;
