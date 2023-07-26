import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('Pravna pomoć 1');
  const [selectedCountry, setSelectedCountry] = useState('Bosna i Hercegovina');
  const [chatGptResponse, setChatGptResponse] = useState('');
  const apiKey = 'Upisi ove samo svoj api ';

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/engines/text-davinci-003/completions',
          {
            prompt: `Selected option: ${selectedOption}\nSelected country: ${selectedCountry}\nUser input: ${userInput}`,
            max_tokens: 2000,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        const responseData = response.data.choices[0].text;
        const trimmedResponse = responseData.substring(0, 1000);
        setChatGptResponse(trimmedResponse);
      } catch (error) {
        console.error('Greška pri dobivanju odgovora od API-ja:', error);
      }
    }
  };

  return (
    <div style={{ background: 'white', minHeight: '100vh', display: 'flex' }}>
      {/* Left side */}
      <div style={{ flex: 3, padding: '25px', boxSizing: 'border-box', background: 'white', border: '2px solid black', margin: '25px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: 'black', fontSize: '24px', marginBottom: '20px' }}>Odaberite pravnu pomoć</h2>
          <select style={{ marginBottom: '20px', fontSize: '18px', height: '50px' }} value={selectedOption} onChange={handleOptionChange}>
            <option value="Pravna pomoć 1">Građanska prava</option>
            <option value="Pravna pomoć 2">Ljudska prava</option>
            <option value="Pravna pomoć 3">Politička prava</option>
            <option value="Pravna pomoć 4">Socijalna prava</option>
            <option value="Pravna pomoć 5">Ekonomska prava</option>
          </select>

          <h2 style={{ color: 'black', fontSize: '24px', marginBottom: '20px' }}>Odaberite državu</h2>
          <select style={{ marginBottom: '20px', fontSize: '18px', height: '50px' }} value={selectedCountry} onChange={handleCountryChange}>
            <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
            <option value="Srbija">Srbija</option>
            <option value="Hrvatska">Hrvatska</option>
            <option value="Crna Gora">Crna Gora</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px', alignSelf: 'stretch' }}>
          <textarea
            value={userInput}
            onChange={handleInputChange}
            style={{ padding: '10px', marginBottom: '20px', fontSize: '18px', width: '100%', minHeight: '100px', resize: 'vertical', boxSizing: 'border-box' }}
          />
          <button onClick={handleSendMessage} style={{ background: 'red', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '20px', cursor: 'pointer' }}>Pošalji</button>
        </div>
      </div>

      {/* Right side */}
      <div style={{ flex: 2, padding: '25px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', background: 'white', border: '2px solid black', margin: '25px' }}>
        <div style={{ marginBottom: '10px', alignSelf: 'flex-start', display: 'flex', alignItems: 'center' }}>
          <img src="your-icon-url.png" alt="Odgovor ikona" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          <h3 style={{ color: 'black', marginBottom: '5px' }}>Odgovor naših pravnika:</h3>
        </div>
        {chatGptResponse && (
          <div style={{ background: '#F1F1F1', padding: '10px', borderRadius: '5px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '10px' }}>
            <p style={{ color: 'black', textAlign: 'right' }}>{chatGptResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
