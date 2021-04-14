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
        <i className='fas fa-ellipsis-v'></i>
        <button className='etc_button'>
          <i className='fas fa-user-circle'></i>
          <p>로그인</p>
        </button>
      </div>
    </header>

    <div className='contentBox'>
      <div className='side_bar'>
        <ul className='side_bar_ul'>
          <li className='side_bar_li'>
            <i className='fas fa-home'></i>
            <p>홈</p>
          </li>
          <li className='side_bar_li'>
            <i className='fas fa-compass'></i>
            <p>탐색</p>
          </li>
          <li className='side_bar_li'>
            <i className='fas fa-play'></i>
            <p>구독</p>
          </li>
          <hr />
          <li className='side_bar_li'>
            <i className='fas fa-copy'></i>
            <p>보관함</p>
          </li>
          <li className='side_bar_li'>
            <i className='fas fa-history'></i>
            <p>시청기록</p>
          </li>
          <hr />
          <li className='side_bar_li_title'>
            <h3>
              로그인하면 동영상에 좋아요를
              <br />
              표시하고 댓글을 달거나 구독할
              <br />수 있습니다.
            </h3>
          </li>
          <button className='etc_button side_login '>
            <i className='fas fa-user-circle'></i>
            <p>로그인</p>
          </button>
          <hr />
          <li className='side_bar_li_title'>
            <h3>인기 YOUTUBE</h3>
            <li className='side_bar_li'>
              <i className='fas fa-music'></i>
              <p>음악</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-trophy'></i>
              <p>스포츠</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-gamepad'></i>
              <p>게임</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-film'></i>
              <p>영화</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-file-alt'></i>
              <p>뉴스</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-satellite-dish'></i>
              <p>실시간</p>
            </li>
            <li className='side_bar_li'>
              <i className='far fa-lightbulb'></i>
              <p>학습</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-vr-cardboard'></i>
              <p>360º 동영상</p>
            </li>
            <hr />
            <li className='side_bar_li'>
              <i className='fas fa-plus-circle'></i>
              <p>채널 탐색</p>
            </li>
            <hr />
            <h3>YOUTUBE 더보기</h3>
            <li className='side_bar_li'>
              <i className='fab fa-youtube'></i>
              <p>YouTube Premium</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-satellite-dish'></i>
              <p>실시간</p>
            </li>
            <hr />
            <li className='side_bar_li'>
              <i className='fas fa-cog'></i>
              <p>설정</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-flag'></i>
              <p>신고기록</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-question-circle'></i>
              <p>고객센터</p>
            </li>
            <li className='side_bar_li'>
              <i className='fas fa-exclamation-triangle'></i>
              <p>의견보내기</p>
            </li>
          </li>
          <hr />
          <p className='side_bar_text'>
            정보 보도자료 저작권 문의하기
            <br />
            크리에이터 광고 개발자
            <br />
            <br />
            약관 개인정보처리방침
            <br />
            정책 및 안전
            <br />
            YouTube 작동의 원리
            <br />
            새로운 기능 테스트하기
          </p>
          <p className='side_bar_text'>
            © 2021 Google LLC <br /> CEO: 선다 피차이
            <br /> 주소: 1600 Amphitheatre
            <br /> Parkway, Mountain View, CA
            <br /> 94043, USA.
            <br /> 전화: 080-822-1450(무료)
          </p>
        </ul>
      </div>

      <div className='content'>
        <div className='content_poster'>
          <button className='content_poster_delete'>X</button>
          <button className='content_poster_wacth'>지금보기</button>
          <img src='/images/youtube-posters.png' alt='' />
        </div>
        <div className='asdf'>
          <h1>123</h1>
        </div>
      </div>
    </div>
  </>
);

export default Search_bar;
