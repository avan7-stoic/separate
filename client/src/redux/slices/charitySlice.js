import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: '',
    description: '',
  },
  loggedIn: false,
  beneficiaries: [],
  stories: [],
};

const charitySlice = createSlice({
  name: 'charity',
  initialState,
  reducers: {
    signUp(state, action) {
      state.profile = action.payload;
      state.loggedIn = true;
    },
    logOut(state) {
      state.profile = { name: '', description: '' };
      state.loggedIn = false;
    },
    addBeneficiary(state, action) {
      state.beneficiaries.push(action.payload);
    },
    addStory(state, action) {
      state.stories.push(action.payload);
    },
    fetchBeneficiaryStories(state, action) {
      state.stories = action.payload;
    },
  },
});

export const { signUp, logOut, addBeneficiary, addStory, fetchBeneficiaryStories } = charitySlice.actions;
export default charitySlice.reducer;
