

export const MOVE_TILE = 'MOVE_TILE';
    export function moveTile(tile) {
      return {
        type: MOVE_TILE,
        payload: tile
      };
    };

export const NEW_GAME = 'NEW_GAME';
    function shuffle(array) {
      let random = array.map(Math.random);
      array.sort(function(a,b) {
        return random[a] - random[b];
      });
    }
    export function startGame(rows) {
      let newArr = [];
      let winArr = [];
      let xPos = rows * rows;
      for (let i=0; i < xPos; i++) {
        newArr[i] = i;
        winArr[i] = i;
      }
      winArr[xPos] = 'x';
      shuffle(newArr);
      xPos = newArr.indexOf(0);
      newArr[xPos] = 'x';
      return {
        type: NEW_GAME,
        payload: {newArr: newArr, xPos: xPos, rows: rows, winArr: winArr}
      };
    };
