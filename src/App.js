import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { LandingSlider } from './components/Slider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles';
import { CoffeeStore, CoffeeMakerStore, AccessoriesStore } from './components/pages/Store'
import styled from 'styled-components'

export const SliderWrap = styled.div`
margin-left: 7rem;


`
export const SidebarWrap = styled.div`
height: 100%;
width:7em;
float: left;
justify-content: space-between;
`


function App() {
  return (
    <>

      <Header id="headernav" />
      <SidebarWrap id="sidebar-wrap">
        <Router id="nav-router">
          <Sidebar id="sidenav" />
          <Switch>
            {/* <Route path="/" exact component={Home} /> 
          <Route path="/store" exact component={CoffeeStore} /> 
          <Route path="/about" exact component={CoffeeMakerStore} /> 
          <Route path="/contact" exact component={AccessoriesStore} />  */}
          </Switch>
        </Router>
      </SidebarWrap>

      <SliderWrap id="slider-wrap">
        <LandingSlider id="landing-slider" />
      </SliderWrap>
    </>

  );
}

export default App;