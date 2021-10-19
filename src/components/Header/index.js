import React from 'react';
import './styles.css';

function Header( { black } ) {
  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />
          </a>
        </div>
        <div className="header--user">
          <a href="https://github.com/rodrigofrontsp" target="_blank" rel="noopener noreferrer">
            <img alt="Usuário" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" />
          </a>
        </div>
    </header>
  );
}

export default Header;