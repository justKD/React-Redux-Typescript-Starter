import { combineReducers } from '@reduxjs/toolkit';

/** import all the slicers we want to include */
import { AppSlice } from '../slices/AppSlice';

/** add a property for each reducer */
export const reducer = combineReducers({
  AppSlice: AppSlice.reducer,
});
