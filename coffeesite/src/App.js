import './App.css';
import Header from './components/Header'
<<<<<<< HEAD
import TopNav from './components/TopNav'
import { LandingSlider } from './components/Slider';
=======
import Sidebar from './components/Sidebar'
import { Slideshow } from './components/Carousel/Carousel';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles';
import {CoffeeStore, CoffeeMakerStore, AccessoriesStore} from './components/pages/Store'

>>>>>>> origin

function App() {
  return (
    <div>
      <Header id="black-border" />
<<<<<<< HEAD
      <TopNav id="topnav"/>
      <LandingSlider />
=======
      <Router>
        <Sidebar id="sidenav" />
        <Switch>
          {/* <Route path="/" exact component={Home} />  */}
          {/* <Route path="/store" exact component={CoffeeStore} />  */}
          {/* <Route path="/about" exact component={CoffeeMakerStore} />  */}
          {/* <Route path="/contact" exact component={AccessoriesStore} />  */}
        </Switch>
      </Router>

      
      <Slideshow />
>>>>>>> origin
    </div>

  );
}

export default App;