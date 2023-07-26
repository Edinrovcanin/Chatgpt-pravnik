import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Left side */}
            <div style={{ flex: '60%', padding: '25px', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ color: 'black', fontSize: '40px', marginBottom: '20px' }}>Welcome to Legal Help Center</h1>
                <p style={{ color: 'black', fontSize: '24px', marginBottom: '40px' }}>Get legal assistance for various issues.</p>
                <Link to="/app" style={{ textDecoration: 'none' }}>
                    <button style={{ background: 'red', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '20px', cursor: 'pointer' }}>Get Started</button>
                </Link>
            </div>

            {/* Right side */}
            <div style={{ flex: '40%', padding: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src="your-image-url.png" alt="Legal Help Center" style={{ width: '80%', height: 'auto', borderRadius: '10px' }} />
            </div>
        </div>
    );
};

export default FrontPage;
