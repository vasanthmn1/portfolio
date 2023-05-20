
import './App.css';
import { Contact } from './components/contacts/Contact';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';
import { Portfolio } from './components/portfolio/Portfolio';
import { Skils } from './components/skils/Skils';
import { TopContainer } from './components/topcontainer/TopContainer';

function App() {
  return (
    <div className="App">

      <TopContainer />

      <Nav />
      <Skils />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
