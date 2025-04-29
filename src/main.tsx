import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import { UserContextProvider } from './hooks/UserContext.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*STEP4: Venir enrober mes routes avec mon contexte provider */}
    <UserContextProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </UserContextProvider>
  </StrictMode>,
)
