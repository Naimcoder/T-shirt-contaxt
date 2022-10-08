import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import Order from './Components/Orders/Order';
import About from './Components/About/About';
import Error from './Layout/Error';
import Grandpa from './Components/Grandpa/Grandpa';
const router=createBrowserRouter([
 
  {
   path:'/',
   element:<Main></Main>,
   children:[
    {
      path:'/',
      loader: ()=>fetch('tshrit.json'),
      element:<Home></Home>
    },
    {
      path:'/order',
      element:<Order></Order>,
      
    },
    {
      path:'/about',
      element:<About></About>,
    },
    {
      path: '/grandpa',
      element: <Grandpa></Grandpa>
    }
   ]
  },
  {
    path:'*',
    errorElement: <Error></Error>
 
  }


])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
