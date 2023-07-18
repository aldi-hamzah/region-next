import * as ActionType from '../constant/regionConstant';

const INIT_STATE = {
  regions: [],
};

const RegionReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQ:
      return { ...state };

    case ActionType.GET_DATA_OK:
      return GetRegion(state, action);

    case ActionType.ADD_REGION_SUCCESS:
      return AddRegionSuccessfully(state, action);

    case ActionType.DELETE_REGION_REQUEST:
      return { ...state };

    case ActionType.DELETE_REGION_SUCCESS:
      return DeleteRegionSuccessfully(state, action);

    case ActionType.UPDATE_REGION_REQUEST:
      return { ...state };

    case ActionType.UPDATE_REGION_SUCCESS:
      return UpdateRegionSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegionSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

const DeleteRegionSuccessfully = (state: any, action: any) => {
  const updatedRegions = state.regions.filter(
    (region: any) => region.id !== action.payload
  );
  return {
    ...state,
    regions: updatedRegions,
  };
};

const UpdateRegionSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    regions: [...state.regions, action.payload],
  };
};

export default RegionReducer;
