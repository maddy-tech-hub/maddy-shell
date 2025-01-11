import { createSlice } from '@reduxjs/toolkit';

export interface Technology {
  url: string;
  label: string;
}

export interface TechnologyState {
  technologies: Technology[];
}

const initialState: TechnologyState = {
  technologies: [
    { url: '', label: 'Master Programs' },
    { url: '', label: 'Cloud Computing' },
    { url: '', label: 'Data Science AI' },
    { url: '', label: 'DevOps' },
    { url: '', label: 'Software Testing' },
    { url: '', label: 'Programming' },
    { url: '', label: 'Web Designing' },
  ],
};

const technologySlice = createSlice({
  name: 'technology',
  initialState,
  reducers: {},
});

export default technologySlice.reducer;
