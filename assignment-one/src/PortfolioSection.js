import React from "react";
import PortItem from "./PortfolioItem";
import "./style.css"

const PortfolioSection= () => (
    <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* Portfolio Section Heading */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* Icon Divider */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* Portfolio Grid Items */}
                <div className="row justify-content-center">
                    <PortItem linkSrc="img/cabin.png" dataTarget="#portfolioModal1"/>
                    <PortItem linkSrc="img/cake.png" dataTarget="#portfolioModal2"/>
                    <PortItem linkSrc="img/circus.png" dataTarget="#portfolioModal3"/>
                    <PortItem linkSrc="img/game.png" dataTarget="#portfolioModal4"/>
                    <PortItem linkSrc="img/safe.png" dataTarget="#portfolioModal5"/>
                    <PortItem linkSrc="img/submarine.png" dataTarget="#portfolioModal6"/>
                </div>
            </div>
        </section>
)

export default PortfolioSection;