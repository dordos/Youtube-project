import React, { useRef } from 'react';
import './search_bar.css';

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {};

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className='header'>
      <div className='menu'>
        <i className='fas fa-bars'></i>
        <img src='/images/logo.png' alt='logo' className='img' />
        <h1>YouTube</h1>
      </div>

      <div className='search'>
        <input
          ref={inputRef}
          type='text'
          placeholder='검색'
          onKeyPress={onKeyPress}
        />
        <button className='buttonImg' onClick={onClick}>
          <img className='buttonImg' src='/images/search.png' alt='search' />
        </button>
        <i className='fas fa-microphone'></i>
      </div>

      <div className='etc'>
        <i className='fas fa-th'></i>
        <i className='fas fa-ellipsis-v'></i>
        <button className='etc_button'>
          <i className='fas fa-user-circle'></i>
          <p>로그인</p>
        </button>
      </div>
    </header>
  );
};

export default SearchBar;
