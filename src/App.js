
import { Toaster } from 'react-hot-toast';
import './App.css';
import { Contact } from './components/contacts/Contact';
import { Footer } from './components/footer/Footer';
import GithupCalender from './components/githupcalender/GithupCalender';
import { Nav } from './components/nav/Nav';
import { Portfolio } from './components/portfolio/Portfolio';
import { Skils } from './components/skils/Skils';
import { TopContainer } from './components/topcontainer/TopContainer';

function App() {
  return (
    <div className="App">
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <TopContainer />
      <Nav />
      <Skils />
      <Portfolio />
      <GithupCalender />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
