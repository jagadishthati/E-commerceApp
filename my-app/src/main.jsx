import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Cart from './Pages/Cart.jsx'
import Context from './Context/Context.jsx'
const router= createBrowserRouter(
  [{

    path:"/",
    element:<App/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Context>
    <RouterProvider router={router}/>
    </Context>

)
