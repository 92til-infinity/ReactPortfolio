// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
