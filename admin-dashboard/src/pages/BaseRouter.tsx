import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Dashboard } from './Dashboard';

export const BaseRouter = (): ReactElement => {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
};
