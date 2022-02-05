import React from 'react';
import PropTypes from 'prop-types';

const NetBackboard = (props) => {
  return (
    <g>
      <rect
        x={props.position.x}
        y={props.position.y}
        rx={20}
        ry={20}
        width={200}
        height={200}
        style={props.style}
      />
      {/* <image href='src/item-images/trash-can.png' height='200' width='200' /> */}
    </g>
  );
};

export default NetBackboard;
