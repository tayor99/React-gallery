import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

import images from './components/data';
import React, { useState } from 'react';

function App() {
  const [pictures, setPictures] = useState(images());
  const [text, setText] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  return (
    <div className="App">
      <SearchBar text={text} handleChange={handleChange} />
      <ImageList pictures={pictures} text={text} setPictures={setPictures} />
    </div>
  );
}

export default App;
