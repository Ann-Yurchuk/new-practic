import { createSlice } from '@reduxjs/toolkit';

const usersInitialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    addUsers: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
    },
  },
});

export const { addUsers } = userSlice.actions;
export const usersReducer = userSlice.reducer;
