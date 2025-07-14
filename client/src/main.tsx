import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/pages/About.tsx'
import Library from './components/pages/Library.tsx'
import NotFound from './components/pages/404.tsx'
import Layout from './components/Layout.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/library',
        element: <Library />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
])

import ErrorBoundary from './components/ErrorBoundary'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)
