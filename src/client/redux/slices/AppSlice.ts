import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  greeting: string;
} = {
  greeting: 'Greetings!',
};

/**
 * Redux state and actions.
 */
export const AppSlice = createSlice({
  name: 'AppSlice',
  initialState: initialState,
  reducers: {
    setGreeting: (state, action: PayloadAction<string>) => {
      state.greeting = action.payload;
    },
  },
});
