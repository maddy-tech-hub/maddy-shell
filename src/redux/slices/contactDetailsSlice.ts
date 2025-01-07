import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactDetailsState {
  location: {
    title: string;
    address: string;
  };
  phone: {
    title: string;
    number1: string;
    number2: string;
  };
  email: {
    title: string;
    address: string;
    website: string;
  };
  instagram: {
    title: string;
    profile: string;
  };
  linkedin: {
    title: string;
    profile: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  companyName: string;
}

const initialState: ContactDetailsState = {
  location: {
    title: "Our Location",
    address: "No.143, 4th Cross, Prasanth Extension, Whitefield, Bangalore - 560066 (Near Thalassery Restaurant)"
  },
  phone: {
    title: "Urgent Call",
    number1: "+91 6362411428",
    number2: "+91 9885414558"
  },
  email: {
    title: "Email Address",
    address: "hr@irasah.com",
    website: "www.Irasah.com"
  },
  instagram: {
    title: "Instagram",
    profile: "Irasah_Innovations"
  },
  linkedin: {
    title: "LinkedIn",
    profile: "Irasah Innovations"
  },
  socialLinks: {
    facebook: "https://www.instagram.com/irasah_innovations",
    twitter: "https://www.instagram.com/irasah_innovations",
    linkedin: "https://www.instagram.com/irasah_innovations",
    instagram: "https://www.instagram.com/irasah_innovations"
  },
  companyName: "Irasah Innovations"
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
