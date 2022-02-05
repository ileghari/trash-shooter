import { calculateAngle } from '../utils/formulas';

function moveObjects(state, action) {
  if (!action.mousePosition) return state;
  const { x, y } = action.mousePosition; // extracts x and y properties from mousePosition

  const angle = calculateAngle(0, 0, x, y); // uses those to caluclate new angle

  return {
    ...state,
    angle,
  }; // generates a new state with the new angle
}

export default moveObjects;
