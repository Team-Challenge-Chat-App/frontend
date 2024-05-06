import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { AppRoutes } from '@/common/enums';
import { RouterProvider } from '@/lib/router/RouterProvider.tsx';
import { store } from '@/lib/store/store.ts';
import { AuthPage } from '@/pages';

import App from './app/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
        routes={[
          {
            path: AppRoutes.ROOT,
            element: <App />,
            children: [
              {
                path: AppRoutes.LOGIN,
                element: <AuthPage />,
              },
              {
                path: AppRoutes.REGISTER,
                element: <AuthPage />,
              },
            ],
          },
        ]}
      />
    </Provider>
  </React.StrictMode>,
);
