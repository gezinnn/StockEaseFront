import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/Home'
import "@fontsource/montserrat";


function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path:"/home",
    element: <Home/>
  }
  
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
