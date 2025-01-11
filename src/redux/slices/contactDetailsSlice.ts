import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactDetailsState {
  siteTitle: string;
  location: {
    title: string;
    address: string;
  };
  phone: {
    title: string;
    number1: string;
    number2: string;
    whatsapp?: string;
  };
  email: {
    title: string;
    address: string;
    website: string;
  };
  socialLinks: {
    whatsapp?: string;
    instagram?: string;
    linkedin?: string;
    gmail?: string;
  };
}

const initialState: ContactDetailsState = {
  siteTitle: 'MaddyTech',
  location: {
    title: 'Our Location',
    address: 'No 16, 18th Cross 6th Main, BTm 2nd Stage, Bangalore, 560076',
  },
  phone: {
    title: 'Urgent Call',
    number1: '+91 8886380746',
    number2: '+91 6301804286',
  },
  email: {
    title: 'Email Address',
    address: 'vemireddyomr@gmai.com',
    website: 'www.maddy.com',
  },
  socialLinks: {
    whatsapp: 'https://wa.me/8886380746',
    instagram: 'https://www.instagram.com/vemireddy_official',
    linkedin: 'https://www.linkedin.com/in/madhava-reddy-vemireddy-9a0826167',
    gmail: 'mailto:vemireddyomr@gmail.com',
  },
};

const contactDetailsSlice = createSlice({
  name: 'contactDetails',
  initialState,
  reducers: {
    setContactDetails: (state, action: PayloadAction<ContactDetailsState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setContactDetails } = contactDetailsSlice.actions;
export default contactDetailsSlice.reducer;
