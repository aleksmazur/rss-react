import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from '../../pages/main/Main';
import { RoutePropsType } from '../../types/types';
import PageWrapper from './PageWrapper';

it('display the correct title', () => {
  const route: RoutePropsType = {
    path: 'string',
    title: 'string',
    component: <Main />,
  };

  render(
    <Router>
      <PageWrapper {...route} />
    </Router>
  );
  const message = screen.queryByText(route.title);
  expect(message).toBeVisible();
});
