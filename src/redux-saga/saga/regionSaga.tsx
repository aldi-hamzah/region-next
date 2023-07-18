import { call, put } from 'redux-saga/effects';
import region from '@/pages/api/region';
import {
  GetRegionFail,
  GetRegionSuccess,
  AddRegionSuccess,
  AddRegionFailed,
  DeleteRegionSuccess,
  DeleteRegionFailed,
  UpdateRegionSuccess,
  UpdateRegionFailed,
} from '../action/regionAction';

function* handleGetRegion(): any {
  try {
    const result = yield call(region.getData);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFail(error));
  }
}

function* createRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(region.upload, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* deleteRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(region.deleted, payload);
    yield put(DeleteRegionSuccess(result.data));
  } catch (error) {
    yield put(DeleteRegionFailed(error));
  }
}

function* updateRegion(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(region.update, payload, id);
    yield put(UpdateRegionSuccess(result));
  } catch (error) {
    yield put(UpdateRegionFailed(error));
  }
}

export { handleGetRegion, deleteRegion, updateRegion, createRegion };
