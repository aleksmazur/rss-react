import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../../pages/main/Main';
import store from '../../store';
import { RoutePropsType } from '../../types/types';
import PageWrapper from './PageWrapper';

it('display the correct title', () => {
  const route: RoutePropsType = {
    path: 'string',
    title: 'string',
    component: <Main />,
  };
  render(
    <Provider store={store}>
      <Router>
        <PageWrapper {...route} />
      </Router>
    </Provider>
  );
  const message = screen.queryByText(route.title);
  expect(message).toBeVisible();
});
