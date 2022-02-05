import React, { Component } from 'react';
import Canvas from './components/Canvas';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';

// function App(props) {
//   return <Canvas />;
// }

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, 10);

    window.onresize = () => {
      const cnv = document.getElementById('trash-shooter-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        trackMouse={(event) => this.trackMouse(event)}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;
