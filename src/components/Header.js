import React from 'react';
import PropTypes from 'prop-types'
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
      <header>
        <Stats 
            players={players}
        />
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object) ,
  title: PropTypes.string
}

// Can also give components a default value for props using the "defaultProps" property
// If Header component is already supplied a "title" prop, that value will take priority over the "defaultProps" value 

Header.defaultProps = {
  title: "Scoreboard"
}

  export default Header;