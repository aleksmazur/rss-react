import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import PageWrapper from './components/pageWrapper/PageWrapper';
import Form from './pages/form/Form';

const routes = [
  {
    path: '/',
    title: 'Main',
    component: <Main />,
  },
  {
    path: '/form',
    title: 'Form',
    component: <Form />,
  },
  {
    path: '/about',
    title: 'About',
    component: <About />,
  },
  {
    path: '*',
    title: '404',
    component: <NotFound />,
  },
];

const App = () => {
  return (
    <div className="app">
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={<PageWrapper {...route} />} />;
        })}
      </Routes>
    </div>
  );
};

export default App;
