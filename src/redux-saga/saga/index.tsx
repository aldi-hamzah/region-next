import { takeEvery, all } from 'redux-saga/effects';
import * as ActionRegion from '../constant/regionConstant';
import {
  handleGetRegion,
  createRegion,
  deleteRegion,
  updateRegion,
} from './regionSaga';
function* watchAll() {
  yield all([
    takeEvery(ActionRegion.GET_DATA_REQ, handleGetRegion),
    takeEvery(ActionRegion.ADD_REGION_REQUEST, createRegion),
    takeEvery(ActionRegion.UPDATE_REGION_REQUEST, updateRegion),
    takeEvery(ActionRegion.DELETE_REGION_REQUEST, deleteRegion),
  ]);
}

export default watchAll;
