import "./styles.css";
import Search from "./Search";
// import Forecast from "./Forecast";
import Footer from "./Footer";

import cloudsSunRays from "./images/cloudsSunRays.jpg";
import cloudsSunRaysVideo from "./images/cloudsSunRaysVideo.mp4";

export default function App() {
  return (
    <div className="App">
      <video id="backgroundVideo" autoPlay loop muted poster={cloudsSunRays}>
        <source src={cloudsSunRaysVideo} type="video/mp4" />
      </video>

      <Search defaultCity="London" />
      {/* <Forecast /> */}
      <Footer />
    </div>
  );
}
