
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';

import Body from './components/Body';
import WatchPage from './components/WatchPage';
import SearchContainer from './components/SearchContainer';
import { useSelector } from 'react-redux';


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
        },
        {
          path:'/search/:searchQuery',
          element:<SearchContainer/>
        }
      ]
    }
  ])
 

  const lightMode = useSelector((store)=>store?.app?.lightMode)

  return (
    <div className={`${lightMode ? '':'bg-black'}`}>
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
