import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Masthead from "./Masthead";
import NavBar from "./NavBar";
import PortfolioSection from "./PortfolioSection";
import PortfolioModal from "./PortfolioModal";
import "./style.css"

const App = () => (
    <div>
        <NavBar/>
        <Masthead/>
        <PortfolioSection/>
        <AboutSection/>
        <ContactSection/>
        <Footer/>
        <PortfolioModal title="Log Cabin" imgUrl="img/cabin.png" modalID="portfolioModal1"/>
        <PortfolioModal title="Tasty Cake" imgUrl="img/cake.png" modalID="portfolioModal2"/>
        <PortfolioModal title="Circus Tent" imgUrl="img/circus.png" modalID="portfolioModal3"/>
        <PortfolioModal title="Controller" imgUrl="img/controller.png" modalID="portfolioModal4"/>
        <PortfolioModal title="Locked Safe" imgUrl="img/safe.png" modalID="portfolioModal5"/>
        <PortfolioModal title="Submarine" imgUrl="img/submarine.png" modalID="portfolioModal6"/>

    </div>
)

export default App;