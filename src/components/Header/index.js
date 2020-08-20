import React from 'react';
import './style.css';

import Proptypes from 'prop-types';

const Header = (props) => {
  const {
    title, difficulty, author, image,
  } = props;

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-infos">
          {author} - {difficulty}
        </p>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: Proptypes.string.isRequired,
  difficulty: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,

};
export default Header;
