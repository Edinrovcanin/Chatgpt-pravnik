import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Left side */}
            <div style={{ flex: '60%', padding: '25px', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ color: 'black', fontSize: '40px', marginBottom: '20px' }}>Besplatna pravna pomoc s nasim AI advokatom vec danas!</h1>
                <p style={{ color: 'black', fontSize: '24px', marginBottom: '40px' }}>Da li imate pravno pitanje ili nedoumicu koju želite da riješite? Naš AI advokat je tu da vam pomogne! Bez obzira na to da li se radi o ličnim ili poslovnim pravnim pitanjima, naš napredni AI sistem će vam pružiti brze, precizne i relevantne odgovore na osnovu vaših specifičnih potreba.</p>
                <p style={{ color: 'black', fontSize: '24px', marginBottom: '40px' }}>Naš AI advokat je opremljen moćnim analitičkim sposobnostima i obuhvata širok spektar pravnih oblasti, uključujući građansko pravo, poslovno pravo, radno pravo, porodično pravo i mnoge druge. Pored toga, sistem se redovno ažurira kako bi bio u koraku s najnovijim pravnim propisima i presudama. </p>
                <Link to="/app" style={{ textDecoration: 'none' }}>
                    <button style={{ background: 'red', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '20px', cursor: 'pointer' }}>POSTAVITE PITANJE NASEM AI ADVOKATU</button>
                </Link>
            </div>

            {/* Right side */}
            <div style={{ flex: '40%', padding: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src="Frontimage.png" alt="Legal Help Center" style={{ width: '80%', height: 'auto', borderRadius: '10px' }} />
            </div>
        </div>
    );
};

export default FrontPage;
