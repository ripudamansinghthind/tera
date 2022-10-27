import Navbar from "./Components/Layout/Navbar";
import Main from "./Components/Layout/Main";
import Content from "./Components/Layout/Content";
import Foot from "./Components/Layout/Footer";
import Careers from "./Components/Layout/Careers";
import AboutUs from './Components/Layout/AboutUs';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Main />
    <Content />
    <AboutUs />
    <Foot />
    </div>
  );
}

export default App;
