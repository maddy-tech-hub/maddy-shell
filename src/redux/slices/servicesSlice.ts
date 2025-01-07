import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Service {
  title: string;
  description: string;
  icon: string;
  url: string;
}

interface ServicesState {
  services: Service[];
}

const initialState: ServicesState = {
  services: [
    {
      title: 'Consulting & Staffing',
      description: 'We offer comprehensive employment services such as payroll and benefits administration, HR management, and assistance.',
      icon: 'icon1',
      url: ''
    },
    {
      title: 'Product Development',
      description: 'Looking for a fast, creative, and experienced product design company?',
      icon: 'icon2',
      url: ''
    },
    {
      title: 'UX / UI Design Strategy',
      description: 'Complex problems solved by Service Design Thinking.',
      icon: 'icon3',
      url: ''
    },
    {
      title: 'Web Design And Development',
      description: 'We want to help them easily find you and discover all that you have to offer.',
      icon: 'icon4',
      url: ''
    },
    {
      title: 'Mobile App Development',
      description: 'Your digital partner to create inspirational design and robust solution for Web, Mobile & Cloud.',
      icon: 'icon5',
      url: ''
    },
    {
      title: 'Digital Marketing',
      description: 'Are you looking for your company\'s domain to appear on the top of the 1st page in Google?',
      icon: 'icon6',
      url: ''
    },
    {
      title: 'Branding',
      description: 'Good branding can set you apart from the crowd and bring your company\'s vision to life.',
      icon: 'icon7',
      url: ''
    },
    {
      title: 'Outdoor Marketing',
      description: 'We make sure your brand is heard and seen in every possible way and yes we measure as well!',
      icon: 'icon8',
      url: ''
    }
  ],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<ServicesState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {setServices} = servicesSlice.actions;
export default servicesSlice.reducer;
