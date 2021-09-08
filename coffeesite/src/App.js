import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { LandingSlider } from './components/Slider';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles';
import {CoffeeStore, CoffeeMakerStore, AccessoriesStore} from './components/pages/Store'


function App() {
  return (
    <div>
      <Header id="black-border" />
      <Router>
        <Sidebar id="sidenav" />
        <Switch>
          {/* <Route path="/" exact component={Home} />  */}
          {/* <Route path="/store" exact component={CoffeeStore} />  */}
          {/* <Route path="/about" exact component={CoffeeMakerStore} />  */}
          {/* <Route path="/contact" exact component={AccessoriesStore} />  */}
        </Switch>
      </Router>

      
      <LandingSlider />
    </div>

  );
}

export default App;