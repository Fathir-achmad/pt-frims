import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portofolio from './components/Portofolio';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/script/whatsapp';

function App() {
  return (
    <div className="App">
        <Nav />
        <Header />
        <About/>
        <Services />
        <Portofolio />
        <Footer />
        <FloatingWhatsApp />
    </div>
  );
}

export default App;