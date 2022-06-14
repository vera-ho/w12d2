import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import SessionReducer from './session'

export default combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
});
