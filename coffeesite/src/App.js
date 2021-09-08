import './App.css';
import Header from './components/Header'
import TopNav from './components/TopNav'
import { Slideshow } from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <Header id="black-border" />
      <TopNav id="topnav"/>


      <h1>Coffee Shop</h1>
      <Slideshow />
    </div>

  );
}

export default App;