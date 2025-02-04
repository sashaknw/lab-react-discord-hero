
import './App.css';
import Navbar from './components/Navbar'
import ButtonWhite from "./components/ButtonWhite";
import ButtonBlack from "./components/ButtonBlack";
import heroImage from './assets/characters.png';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            IMAGINE A <br /> PLACE...
          </h1>
          <p className="paragraph">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="buttons-container">
            <ButtonWhite />
            <ButtonBlack />
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default App
