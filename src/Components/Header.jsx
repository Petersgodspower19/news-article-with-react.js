import React from 'react';

function Header({ handleChange }) {
  const date = new Date();
  const currentDate = date.toDateString();

  return (
    <header>
      <h3>News Page</h3>
      <div className="form">
        <input className='form input' type='text' placeholder='search your news' />
        <button>Search</button>
      </div>
      <select name="select" id="select" onChange={handleChange}>
        <option value="tech">Tech</option>
        <option value="world">World</option>
        <option value="tesla">Tesla</option>
        <option value="business">Business</option>
      </select>
      <p>{currentDate}</p>
    </header>
  );
}

export default Header;
