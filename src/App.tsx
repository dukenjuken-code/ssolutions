import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Industries from './components/Industries';
import Catalog from './components/Catalog';
import Trust from './components/Trust';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Industries />
        <Catalog />
        <Trust />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
