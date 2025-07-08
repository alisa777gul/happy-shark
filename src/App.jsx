import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Advantages from "./components/Advantages/Advantages.jsx";
import Product from "./components/Product/Product.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Product />
      <Reviews />
      <Contact /> <Footer />
    </>
  );
}

export default App;
