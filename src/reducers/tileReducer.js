import { MOVE_TILE, NEW_GAME } from 'actions/index';
const INITIAL_STATE = {
  tileArr: [1,2,3,4,5,6,7,8,'x'],
  winArr: [1,2,3,4,5,6,6,7,'x'],
  xPos: 8,
  rows: 3,
  isWin: false
};

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE_TILE: {
      //change former xpos to be new tile value
      let newArr = state.tileArr;
      newArr[state.xPos] = action.payload.value;
      newArr[action.payload.pos] = 'x';
      let isWin = ((newArr == state.winArr) ? true : false );
      return {...state, tileArr: newArr, xPos: action.payload.pos, isWin: isWin};
    }
    case NEW_GAME: {
      return { tileArr: action.payload.newArr,
                winArr: action.payload.winArr,
                xPos: action.payload.xPos,
                rows: action.payload.rows,
                isWin: false };
    }

    default:
     return state;
  }
}
