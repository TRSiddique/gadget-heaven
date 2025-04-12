import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartProvider from './components/Context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TechTrends from './components/TechTrends/TechTrends';
import ErrorPage from './components/Error/Error';
import Statistics from './components/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />,
        loader: async () => {
          const res = await fetch('/gadgetData.json');
          return res.json(); // this must be an array!
        }
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'techtrends',
        element:<TechTrends></TechTrends>
      },
      {
        path: '*',
        element: <ErrorPage />
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider><RouterProvider router={router} />
    <ToastContainer /></CartProvider>
    
  </StrictMode>,
)
