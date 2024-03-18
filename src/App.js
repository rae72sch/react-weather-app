import "./styles.css";
import Header from "./Header";
import Search from "./Search";
// import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search defaultCity="New York" />
      {/* <Forecast /> */}
      <Footer />
    </div>
  );
}
