import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CurrentScore from './CurrentScore';
import NetBase from './NetBase';
import NetBackboard from './NetBackboard';
import StartGame from './StartGame';
import Title from './Title';

const Canvas = (props) => {
  const gameHeight = 1000;
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHeight,
    window.innerWidth,
    gameHeight,
  ]; // sets the canvas to take up the entire screen

  return (
    <svg
      id='trash-shooter-canvas'
      preserveAspectRatio='xMaxYMax none'
      onMouseMove={props.trackMouse}
      viewBox={viewBox}>
      <defs>
        <filter id='shadow'>
          <feDropShadow dx='1' dy='1' stdDeviation='2' />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CurrentScore score={15} />

      {!props.gameState.started && (
        <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      )}
      {props.gameState.started && (
        <g>
          <NetBackboard
            position={{ x: -550, y: -850 }}
            style={{ fill: '#1a1a1a', stroke: 'white', strokeWidth: '5' }}
          />
          <NetBase
            position={{ x: -450, y: -620 }}
            style={{ fill: 'transparent', stroke: 'white', strokeWidth: '5' }}
          />

          <NetBackboard
            position={{ x: -90, y: -850 }}
            style={{ fill: '#26a7de', stroke: 'white', strokeWidth: '5' }}
          />
          <NetBase
            position={{ x: 10, y: -620 }}
            style={{ fill: 'transparent', stroke: 'white', strokeWidth: '5' }}
          />

          <NetBackboard
            position={{ x: 350, y: -850 }}
            style={{ fill: '#028a0f', stroke: 'white', strokeWidth: '5' }}
          />
          <NetBase
            position={{ x: 450, y: -620 }}
            style={{ fill: 'transparent', stroke: 'white', strokeWidth: '5' }}
          />
        </g>
      )}
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
