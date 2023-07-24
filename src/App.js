import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [chatGptResponse, setChatGptResponse] = useState('');
  const apiKey = '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';

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/engines/davinci/completions',
          {
            prompt: userInput,
            max_tokens: 1000, // Povećan broj tokena kako bismo dobili duži odgovor max je 2048
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

        // Provjerite prisutnost ključnih riječi u odgovoru
        const pravneKljucneRijeci = [
          "zakon", "ustav", "sud", "advokat", "parnica", "Bosna i Hercegovina", "Srbija", "Hrvatska", "Crna Gora",
          "odluka", "zakljucak", "presuda", "izvjestaj", "parlament", "opcina", "kanton", "republika", "Federacija",
          "pravni propis", "regulativa", "zakonodavstvo", "propis", "pravni akt", "pravila", "pravna procedura",
          "sudska odluka", "zakonik", "parnični postupak", "sudska praksa", "advokatura", "parnica", "odluka suda",
          "sudski postupak", "izvještaj", "zakonodavno tijelo", "ustavni sud", "upravni sud", "pravni savjet",
          // Dodajte dodatne ključne riječi ako je potrebno
        ];

        const jeRelevantanOdgovor = pravneKljucneRijeci.some(kljucnaRijec => responseData.includes(kljucnaRijec));

        // Ako je odgovor relevantan, postavite ga kao chatGptResponse
        if (jeRelevantanOdgovor) {
          // Ograničite odgovor na maksimalno 1000 znakova moguce je ovo maki prositi na max 2048
          const trimmedResponse = responseData.substring(0, 1000);
          setChatGptResponse(trimmedResponse);
        } else {
          // Ako odgovor nije relevantan, prikažite poruku korisniku da odgovor nije vezan za pravne teme
          setChatGptResponse("Odgovor nije vezan za pravne teme.");
        }
      } catch (error) {
        console.error('Greška pri dobivanju odgovora od API-ja:', error);
      }
    }
  };

  return (
    <div style={{ background: '#68b6ef', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2 style={{ color: 'white' }}>Odaberite pravnu pomoć</h2>
      <select style={{ marginBottom: '10px' }}>
        <option>Pravna pomoć 1</option>
        <option>Pravna pomoć 2</option>
        <option>Pravna pomoć 3</option>
        {/* Dodati treba pravne pomoci i dodatne opcije */}
      </select>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="text" value={userInput} onChange={handleInputChange} style={{ padding: '5px', marginBottom: '10px' }} />
        <button onClick={handleSendMessage} style={{ background: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Pošalji</button>
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
