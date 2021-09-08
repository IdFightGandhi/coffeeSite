import './App.css';
import Header from './components/Header'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import { Slideshow } from './components/Carousel/Carousel';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header id="black-border" />
      <TopNav id="topnav"/>
      <Router>
        <Sidebar id="sidenav" />
      </Router>

      
      <Slideshow />
    </div>

  );
}

export default App;