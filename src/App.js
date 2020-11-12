import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/Drawer/Drawer';
import Dashboard from './components/Dashboard/Dashboard';
import BlankPage from './components/BlankPage/BlankPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='app-conent'>
        <SideDrawer />
        <Switch>
          <Route path='/analytics'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
