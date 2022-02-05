import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';

const Title = () => {
  const textStyle = {
    fontFamily: 'Supermercado One',
    fontSize: 80,
    fill: '#DC143C',
  };

  return (
    <g filter='url(#shadow)'>
      <text x='-400' y='-700' {...textStyle}>
        Welcome to Trash Shooter
      </text>
    </g>
  );
};

export default Title;
