import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Create from './Create.jsx'
import Dashboard from './Dashboard.jsx'
import './index.css'
import Lista from './Lista.jsx'
import Menu from './Menu.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/",
        element: <Lista />
      },
      {
        path: "/create",
        element: <Create />
      },
      {
        path: "/update/:id",
        element: <Create />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
