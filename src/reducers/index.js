import { combineReducers } from 'redux';
import TileReducer from 'reducers/tileReducer';

const rootReducer = combineReducers({
 tiles: TileReducer
});

export default rootReducer;
