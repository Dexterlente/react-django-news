import './App.css';
import NavBar from './Components/NavBar'
import Cover from './Components/Cover'
import MainBody from './Pages/MainBody'
import Footer from './Components/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ArticlePage from './Pages/ArticlePage'
import LivePrice from './Pages/LivePrice'
import PostPage from './Pages/PostPage'
import About from './Pages/About'
import LoginPage from './Pages/LoginPage';


const PostContent = lazy(() =>  import('./Pages/PostContent'));
const ArticleContent = lazy(() =>  import('./Pages/ArticleContent'));
const RegisterForm = lazy(() =>  import('./Pages/RegisterForm'));

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
              <Route path="/articles" element={<ArticlePage />} />
              <Route path="/liveprice" element={<LivePrice />} />
              <Route path="/post/:id" element={<PostContent />} />  
              <Route path="/articles/:id" element={<ArticleContent />} /> 
              <Route path="/postpage" element={<PostPage />} />     
              <Route path="/about" element={<About />} />       
              <Route path="/registration" element={<RegisterForm />} />        
              <Route path="/login" element={<LoginPage />} />
              </Route>
            </Routes>
        </Suspense>
    </div>
  );
}

export default App;
