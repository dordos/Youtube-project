import React from 'react';
import './search_bar.css';

const Search_bar = (props) => (
  <>
    <header className='header'>
      <div className='menu'>
        <i className='fas fa-bars'></i>
        <img src='/images/logo.png' alt='logo' className='img' />
        <h1>Youtube</h1>
      </div>

      <div className='search'>
        <input type='text' placeholder='검색' />
        <button className='buttonImg'>
          <img className='buttonImg' src='/images/search.png' alt='search' />
        </button>
        <i className='fas fa-microphone'></i>
      </div>

      <div className='etc'>
        <i className='fas fa-th'></i>
        <i class='fas fa-ellipsis-v'></i>
        <button className='etc_button'>
          <i class='fas fa-user-circle'></i>
          <p>로그인</p>
        </button>
      </div>
    </header>

    <div className='contentBox'>
      <div className='side_bar'>
        <ul className='side_bar_ul'>
          <li className='side_bar_li'>
            <i class='fas fa-home'></i>홈
          </li>
          <li className='side_bar_li'>
            <i class='fas fa-compass'></i>탐색
          </li>
          <li className='side_bar_li'>
            <i class='fas fa-play'></i>구독
          </li>
          <li className='side_bar_li'>
            <i class='fas fa-copy'></i>보관함
          </li>
          <li className='side_bar_li'>
            <i class='fas fa-history'></i>시청기록
          </li>
        </ul>
      </div>

      <div className='content'>
        <h1>123</h1>
      </div>
    </div>
  </>
);

export default Search_bar;
