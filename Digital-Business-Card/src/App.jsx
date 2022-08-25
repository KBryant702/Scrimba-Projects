import "./App.css";
import Info from './components/Info'
import Footer from './components/Footer'
import Interests from "./components/Interests";
import About from "./components/About";

function App() {
  return (
    <div className="App">
  <Info />
  <About />
      <Interests/>
      <Footer />
    </div>
  );
}

export default App;
