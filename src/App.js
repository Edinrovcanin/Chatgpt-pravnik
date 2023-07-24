import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [selectedOption, setSelectedOption] = useState('Pravna pomoć 1');
  const [chatGptResponse, setChatGptResponse] = useState('');
  const apiKey = 'API MAKI OVDE PISIb';

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/engines/text-davinci-003/completions',
          {
            prompt: `Selected option: ${selectedOption}\nUser input: ${userInput}`,
            max_tokens: 2000, // Povećan broj tokena kako bismo dobili duži odgovor max je 2048
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        // Iz response-a izvucite odgovor od API-ja
        const responseData = response.data.choices[0].text;

        // Ograničite odgovor na maksimalno 1000 znakova moguće je ovo povećati na max 2048
        const trimmedResponse = responseData.substring(0, 1000);
        setChatGptResponse(trimmedResponse);
      } catch (error) {
        console.error('Greška pri dobivanju odgovora od API-ja:', error);
      }
    }
  };

  return (
    <div style={{ background: '#68b6ef', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2 style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>Odaberite pravnu pomoć</h2>
      <select style={{ marginBottom: '20px', fontSize: '18px', height: '50px' }} value={selectedOption} onChange={handleOptionChange}>
        <option value="Pravna pomoć 1">Građanska prava</option>
        <option value="Pravna pomoć 2">Ljudska prava</option>
        <option value="Pravna pomoć 3">Politička prava</option>
        <option value="Pravna pomoć 4">Socijalna prava</option>
        <option value="Pravna pomoć 5">Ekonomska prava</option>
        {/* Dodati ostale pravne pomoći i opcije */}
      </select>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="text" value={userInput} onChange={handleInputChange} style={{ padding: '10px', marginBottom: '20px', fontSize: '18px', width: '300px' }} />
        <button onClick={handleSendMessage} style={{ background: 'red', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '5px', fontSize: '20px', cursor: 'pointer' }}>Pošalji</button>
      </div>

      {chatGptResponse && (
        <div style={{ marginTop: '20px', background: 'white', padding: '10px', borderRadius: '5px' }}>
          <h3>Odgovor nasih pravnika:</h3>
          <p>{chatGptResponse}</p>
        </div>
      )}
    </div>
  );
};

export default App;
