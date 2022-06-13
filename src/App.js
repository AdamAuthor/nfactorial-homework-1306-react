import img1 from "./img/whiteMountain.jpg";
import img2 from "./img/swamp.jpg";
import img3 from "./img/people.jpg";
import img4 from "./img/fox.jpg";
import img5 from "./img/clouds.jpg";
import "./App.css";
import Navbar from "./navbar.js";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="imageContainer">
        <div className="images">
          <img src={img1} alt="img1" />
          <div className="text">HEY</div>
        </div>
        <div className="images">
          <img src={img2} alt="img2" />
          <div className="text">LET'S</div>
        </div>
        <div className="images">
          <img src={img3} alt="img3" />
          <div className="text">GIVE</div>
        </div>
        <div className="images">
          <img src={img4} alt="img4" />
          <div className="text">ALL</div>
        </div>
        <div className="images">
          <img src={img5} alt="img5" />
          <div className="text">YOU CAN</div>
        </div>
      </div>
    </div>
  );
}

export default App;
