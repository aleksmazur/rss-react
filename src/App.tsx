import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import PageWrapper from './components/pageWrapper/PageWrapper';

const routes = [
  {
    path: '/',
    title: 'Main',
    component: <Main />,
  },
  {
    path: 'about',
    title: 'About',
    component: <About />,
  },
  {
    path: '*',
    title: '404',
    component: <NotFound />,
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={<PageWrapper content={route} />} />
            );
          })}
        </Routes>
      </div>
    );
  }
}

export default App;
