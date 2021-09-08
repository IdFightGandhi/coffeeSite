import './App.css';
import Header from './components/Header'
import TopNav from './components/TopNav'
import { LandingSlider } from './components/Slider';

function App() {
  return (
    <div>
      <Header id="black-border" />
      <TopNav id="topnav"/>
      <LandingSlider />
    </div>

  );
}

export default App;