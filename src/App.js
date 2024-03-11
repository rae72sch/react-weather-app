import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import Search from "./Search";
// import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Search />
      {/* <Forecast /> */}
      <Footer />
    </div>
  );
}
