import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/Home'
import "@fontsource/montserrat";
import Produtos from './Pages/Produtos/Produtos';


function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path:"/home",
    element: <Home/>
  },
  {
    path:"/produtos",
    element: <Produtos/>
  }
  
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
