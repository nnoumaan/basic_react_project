import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./style/App.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/footer.scss"
import "./style/contact.scss"
import "./style/mediaquer.scss"
import Home from "./components/Home";
import Footer from './components/Footer.js'
import Contact from './components/Contact.jsx'
import Services from "./components/Services";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route />
      </Routes>

      <Footer/>
    </Router>
  );
};

export default App;
