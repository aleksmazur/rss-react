import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import About from './components/about/About';
import NotFound from './components/notFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
