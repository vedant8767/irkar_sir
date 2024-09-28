import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import RecentActivityPage from './pages/RecentActivityPage.jsx'
import LekhPage from './pages/LekhPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element:<HomePage/>,
        },
        {
            path: "/recentactivity",
            element:<RecentActivityPage/>
        },
        {
            path: "/lekh",
            element: <LekhPage/>
        },
        {
            path: "/contact",
            element:<ContactPage/>
        },
      ]
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
