import './App.css';
import Header from './components/Header'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import { Slideshow } from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <Header id="black-border" />
      <TopNav id="topnav"/>
      <SideNav id="sidenav" />


      
      <Slideshow />
    </div>

  );
}

export default App;