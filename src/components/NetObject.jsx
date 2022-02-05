import React from 'react';
import PropTypes from 'prop-types';
import NetBase from './NetBase';
import NetBackboard from './NetBackboard';

const NetObject = (props) => (
  <g>
    <NetBase position={props.position} style={props.style} />
    <NetBackboard position={props.position} style={props.style} />
  </g>
);

export default NetObject;
