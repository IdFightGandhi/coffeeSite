import './App.css';
import CarouselSlider from './components/Carousel/Carousel';
import { CarouselData } from './components/Carousel/CarouselData';

function App() {
  return (
    <div>
      <h1>Coffe Shop</h1>
      <CarouselSlider slides={CarouselData} />


    </div>
  );
}

export default App;
