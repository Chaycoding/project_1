import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/header';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Contactinfo from './components/contactPage';
import Mainpage from './content';
import ArticleOne from './components/article1';
import ScrollToTop from './components/scrollToTop';
import articleContent from './components/articleContent';
import ScienceContent from './components/scienceContent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
let y = articleContent.map(x=>{
  if(x.id == 1){return <ArticleOne name={x.name} content={x.content} image={x.image} img={x.imgcaption} date={x.date} readLength={x.readLength} author={x.author} /> } 
});
let z = articleContent.map(x=>{
  if(x.id == 2){return <ArticleOne name={x.name} content={x.content} image={x.image} img={x.imgcaption} date={x.date} readLength={x.readLength} author={x.author}/> } 
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop/>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/contactinfo' element={<Contactinfo/>} />
      <Route path='/content' element={<ScienceContent/>} />
      <Route path='/article1' element={y} />
      <Route path='/article2' element={z} />
    </Routes>
    <Footer />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
