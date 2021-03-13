import React from "react";
import NavBar from "./NavBar"
import Jumbo from "./JumbotronSection";
import CardSection from "./CardSection";
import Footer from "./Footer";
import FeatureSection from "./FeatureSection";

const App = () => (
    <div><NavBar />
    <Jumbo />
    <FeatureSection />
    <CardSection />
    <Footer />
    </div>
)

export default App;