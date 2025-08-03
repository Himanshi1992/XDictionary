import React, { useState } from 'react';

function Dictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);
  const [search, setSearch] = useState('');
  const [definition, setDefinition] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const found = dictionary.find(
      item => item.word.toLowerCase() === search.trim().toLowerCase()
    );
    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
    setSearched(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Dictionary App</h2>
      <input type="text" placeholder="Search for a word" value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>Search</button>

      <div style={{ marginTop: '20px' }}>
        <h3>Definition:</h3>
        <p>{searched ? definition : ''}</p>
      </div>
    </div>
  );
}
export default Dictionary;