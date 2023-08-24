import React from "react";
import Header from "./Component/Head/Header";
import Home from "./Component/Hero/Home";
import "./App.css";
import Features from "./Component/Features/Features";
import Portfolio from "./Component/Portfolio/Portfolio";
import Resume from "./Component/Resume/Resume";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer"
// import Resume from "./component/Resume/Resume"
// import Testimonial from "./component/Testimonial/Testimonial"
// import Blog from "./component/Blog/Blog"
// import Contact from "./component/Contact/Contact"
// import Footer from "./component/Footer"




const App = () => {
  return (
    <>
      <Header />
      <Home/>
      <Features/>
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
      {/* <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App