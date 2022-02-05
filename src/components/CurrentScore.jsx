import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  const scoreStyle = {
    fontFamily: '"Supermercado One", cursive',
    fontSize: 80,
    fill: '#DC143C',
  };

  return (
    <g filter='url(#shadow)'>
      <text style={scoreStyle} x='300' y='80'>
        {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;
