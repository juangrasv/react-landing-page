import Hero from './components/Hero.jsx';
import Product from './components/Product.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'
import Feature from './components/Feature.jsx'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <Footer/>
    </>
  );
}

export default App;
