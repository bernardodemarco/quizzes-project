import { PageNotFound } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'PageNotFound',
  component: PageNotFound,
};

export const Template = () => (
  <Router>
    <PageNotFound />
  </Router>
);
