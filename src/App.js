import "./styles.css";
import Search from "./Search";
// import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search defaultCity="Cape Town" />
      {/* <Forecast /> */}
      <Footer />
    </div>
  );
}
