import * as ActionRegion from '../constant/regionConstant';

export const GetRegionReq = () => ({
  type: ActionRegion.GET_DATA_REQ,
});

export const GetRegionSuccess = (payload: any) => ({
  type: ActionRegion.GET_DATA_OK,
  payload,
});

export const GetRegionFail = (payload: any) => ({
  type: ActionRegion.GET_DATA_FAIL,
  payload,
});

// ADD REGION
export const AddRegionRequest = (payload: any) => ({
  type: ActionRegion.ADD_REGION_REQUEST,
  payload,
});

export const AddRegionSuccess = (payload: any) => ({
  type: ActionRegion.ADD_REGION_SUCCESS,
  payload,
});

export const AddRegionFailed = (payload: any) => ({
  type: ActionRegion.ADD_REGION_FAILED,
  payload,
});

// DELETE REGION
export const DeleteRegionRequest = (payload: any) => ({
  type: ActionRegion.DELETE_REGION_REQUEST,
  payload,
});

export const DeleteRegionSuccess = (payload: any) => ({
  type: ActionRegion.DELETE_REGION_SUCCESS,
  payload,
});

export const DeleteRegionFailed = (payload: any) => ({
  type: ActionRegion.DELETE_REGION_FAILED,
  payload,
});

// UPDATE REGION
export const UpdateRegionRequest = (payload: any, id: string) => ({
  type: ActionRegion.UPDATE_REGION_REQUEST,
  payload,
  id,
});

export const UpdateRegionSuccess = (payload: any) => ({
  type: ActionRegion.UPDATE_REGION_SUCCESS,
  payload,
});

export const UpdateRegionFailed = (payload: any) => ({
  type: ActionRegion.UPDATE_REGION_FAILED,
  payload,
});
