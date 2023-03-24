import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../../pages/main/Main';
import PageWrapper, { RoutePropsType } from './PageWrapper';

it('display the correct title', () => {
  const route: RoutePropsType = {
    path: 'string',
    title: 'string',
    component: <Main />,
  };

  render(
    <Router>
      <PageWrapper content={route} />
    </Router>
  );
  const message = screen.queryByText(route.title);
  expect(message).toBeVisible();
});
