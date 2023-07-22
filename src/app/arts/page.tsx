import "./arts.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery1 from "./components/Gallery1";
import Footer2 from "./components/Footer2";
import Header2 from "./components/Header2";
import Gallery2 from "./components/Gallery2";
const Arts = () => {
  return (
    <div>
      <div>
        <Header />
        <Gallery1 />
        <Footer />
      </div>
      <div>
        <Header2 />
        <Gallery2 />
        <Footer2 />
      </div>
    </div>
  );
};

export default Arts;
