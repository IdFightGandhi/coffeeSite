import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import { LandingSlider } from './components/Slider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CoffeeStore, CoffeeMakerStore, AccessoriesStore } from './components/pages/Store'
import {
  Nav,
  NavIcon,
  SidebarNav,
  SidebarWrap,
  LogoIcon,
  Spacer,
  

} from './components/Sidebar/Sidebar.elements'
import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './components/Sidebar/SidebarData'
import SubMenu from './components/Sidebar/SubMenu'
import styled from 'styled-components'

export const SliderWrap = styled.div`
margin-left: 7rem;


`
export const SidebarIconHolder = styled.div`
height: 100%;
width:7em;
float: left;
justify-content: space-between;
position: fixed;
`


function App() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>

      <Header id="headernav" />
      <SidebarIconHolder id="sidebar-icon-holder">
        <Router>
        <Sidebar id="sidenav" onClickFunction={showSidebar}/>
        </Router>
      </SidebarIconHolder>

        <Router id="nav-router">
          <SidebarNav id="popoutnav" sidenav={sidebar}>
                
                {/* This comes from the SidebarData file which maps through the choices and displays */}
                {SidebarData.map((item, index) => {
                    return<SubMenu item={item} key={index} />
                })}<SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar} /> 
                </NavIcon>
                </SidebarWrap>
                <Spacer />
            </SidebarNav>
          <Switch>
            {/* <Route path="/" exact component={Home} /> 
          <Route path="/store" exact component={CoffeeStore} /> 
          <Route path="/about" exact component={CoffeeMakerStore} /> 
          <Route path="/contact" exact component={AccessoriesStore} />  */}
          </Switch>
        </Router>
      

      <SliderWrap id="slider-wrap">
        <LandingSlider id="landing-slider" />
      </SliderWrap>
      <Newsletter />
      <Router id="footer-router">
        <Footer />
      </Router>
    </>

  );
}

export default App;