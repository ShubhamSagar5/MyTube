
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';

import Body from './components/Body';
import WatchPage from './components/WatchPage';


function App() {
 
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<Feed/>
        },
        {
          path:'/watch',
          element:<WatchPage/>
        }
      ]
    }
  ])
 
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
