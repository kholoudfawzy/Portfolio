import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <main className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
