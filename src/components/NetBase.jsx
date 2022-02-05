import React from 'react';
import PropTypes from 'prop-types';

const NetBase = (props) => {
  return (
    <ellipse
      cx={props.position.x}
      cy={props.position.y}
      rx={80}
      ry={30}
      style={props.style}
    />
    // <ellipse cx = {} cy = {} rx = {} ry = {} style = {fill:'#30abef'}/>
  );
};

NetBase.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default NetBase;
