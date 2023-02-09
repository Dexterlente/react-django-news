import './App.css';
import NavBar from './Components/NavBar'
import Cover from './Components/Cover'
import MainBody from './Pages/MainBody'
import Footer from './Components/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

function App() {
  const NavAndFooter = () => {
  return (
        <>
          <NavBar />
          <Outlet />
          <Footer />
        </>
        );
    };
  
  return (
    <div className='overflow-hidden'>
        <Suspense>
            <Routes>
              <Route element={<NavAndFooter />}>
              <Route path="/" element={<Cover />} />
              <Route path="/post" element={<MainBody />} />             
              </Route>
            </Routes>
        </Suspense>
    </div>
  );
}

export default App;
