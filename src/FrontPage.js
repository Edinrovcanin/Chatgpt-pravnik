import React from 'react';
import { Link } from 'react-router-dom';
import Frontimage from './Frontimage.png';
import './FrontPage.css';

const FrontPage = () => {
    return (
        <div className="front-page-container">
            {/* Left side */}
            <div className="front-page-left">
                <h1 className="front-page-heading">Besplatna pravna pomoc s nasim AI advokatom vec danas!</h1>
                <p className="front-page-text">Da li imate pravno pitanje ili nedoumicu koju želite da riješite? Naš AI advokat je tu da vam pomogne! Bez obzira na to da li se radi o ličnim ili poslovnim pravnim pitanjima, naš napredni AI sistem će vam pružiti brze, precizne i relevantne odgovore na osnovu vaših specifičnih potreba.</p>
                <p className='front-page-text'>Naš AI advokat je opremljen moćnim analitičkim sposobnostima i obuhvata širok spektar pravnih oblasti, uključujući građansko pravo, poslovno pravo, radno pravo, porodično pravo i mnoge druge. Pored toga, sistem se redovno ažurira kako bi bio u koraku s najnovijim pravnim propisima i presudama.</p>
                <Link to="/app" className="front-page-link">
                    <button className="front-page-button">POSTAVITE PITANJE NASEM AI ADVOKATU</button>
                </Link>
            </div>

            {/* Right side */}
            <div className="front-page-right">
                <img src={Frontimage} alt="Legal Help Center" className="front-image" />
            </div>
        </div>
    );
};

export default FrontPage;
