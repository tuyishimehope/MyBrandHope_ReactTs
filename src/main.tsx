import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './Data/routes.tsx';
import { Provider } from 'react-redux';
import {store} from "./state/store.ts"

const router = createBrowserRouter(routes);
window.location.replace(
  "https://www.hopetuyishime.com?utm_source=mybrandhope&utm_medium=portfolio_v1"
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
