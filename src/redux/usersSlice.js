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
    deleteUsers: {
      reducer(state, action) {
        state.users = state.users.filter(user => user.id !== action.payload);
      },
    },
  },
});

export const { addUsers, deleteUsers } = userSlice.actions;
export const usersReducer = userSlice.reducer;
