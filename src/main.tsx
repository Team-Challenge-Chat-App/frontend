import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

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
            path: '/',
            element: <App />,
            children: [
              {
                path: '/login',
                element: <AuthPage />,
              },
              {
                path: '/register',
                element: <AuthPage />,
              },
            ],
          },
        ]}
      />
    </Provider>
  </React.StrictMode>,
);
