import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Work } from './components/Work';

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <Skills />
            <About />
            <Work />
            <Contact />
        </>
    );
}

export default App;
