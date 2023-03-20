import React from "react";
import ReactDOM from 'react-dom/client';
import Content from './components/availableContent';
import Mainbody from './components/main'
import QuoteSection from './components/quoteSection';
import Firstimpression from './components/who,what,howf1';
import Navbar from "./components/header";

function Mainpage() {
    return ( 
        <div className='allcontent'> 
          <Navbar/>
          <Firstimpression/>
          <QuoteSection/>
          <Mainbody />
          <Content/>
      </div>
     );
}

export default Mainpage;