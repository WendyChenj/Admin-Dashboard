import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/Drawer/Drawer';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-conent'>
        <SideDrawer />
        <Dashboard />
      </div>
      
    </div>
  );
}

export default App;
