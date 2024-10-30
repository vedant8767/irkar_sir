import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import RecentActivityPage from './pages/RecentActivityPage.jsx'
import LekhPage from './pages/LekhPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CardDetail from './components/DetailedCard.jsx'
import {HelmetProvider} from 'react-helmet-async'
import GalleryPage from './pages/GalleryPage.jsx'

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
        {
          path:"/card-detail",
          element:<CardDetail/>
        },
        {
          path:"/gallery",
          element:<GalleryPage/>
        }
      ]
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router}/>
    </HelmetProvider>
    {/* <RouterProvider router={router}/> */}
  </StrictMode>,
)
