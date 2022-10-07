
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense} from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header/header'
import Main from '../components/Body/main_page/main_page'
import Podcast from './../components/Body/weather_podcast/podcast'

import ScrollToTop from './../components/Body/ScrollToTop'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Suspense fallback={
             <div class="loader">Loading...
                <Helmet>
                  <title>{ "Loading..." }</title>
                </Helmet>
             </div>
      }>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Podcast />} />
          </Routes>
        </ScrollToTop>
      </Suspense>
    </div>
  );
}

export default App;
