import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Contato from './pages/Contato.jsx';
import Tecnica from './pages/Tecnica.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'tecnica', element: <Tecnica />},
      {path: 'contato', element: <Contato />},
      {path: '*', element: <PageNotFound />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
