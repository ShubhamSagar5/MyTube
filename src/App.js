
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
 
  const sidebarOpen = useSelector((store)=>store?.app?.sidebarOpen)
 
  return (
    <div className=" no-scrollbar">
     <Navbar/>
     <div className=' flex w-[100%]'>
      {
        sidebarOpen && <div className='w-[14%]'>  <Sidebar/>
      </div>
        }
    
      <div className={sidebarOpen ? 'w-[86%]' : 'w-[100%]'}>
        <Feed/>
      </div>

      
     </div>
    </div>
  );
}

export default App;
