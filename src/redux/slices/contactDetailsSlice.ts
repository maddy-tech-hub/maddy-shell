import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactChunk {
  label: string;
  value: string;
}

interface PhoneDetails {
  label: string;
  number1: string;
  number2: string;
  whatsapp?: string;
}

export interface SocialLinks {
  whatsapp?: string;
  instagram?: string;
  linkedin?: string;
  gmail?: string;
  github?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
  pinterest?: string;
  reddit?: string;
  snapchat?: string;
  discord?: string;
  telegram?: string;
}


interface ContactDetailsState {
  siteTitle: string;
  location: ContactChunk;
  email: ContactChunk;
  instagram: ContactChunk;
  linkedIn: ContactChunk;
  phone: PhoneDetails;
  socialLinks: SocialLinks;
}

const initialState: ContactDetailsState = {
  siteTitle: "MaddyTech",
  location: {
    label: "Our Location",
    value: "No 16, 18th Cross 6th Main, BTM 2nd Stage, Bangalore, 560076",
  },
  email: {
    label: "Email Address",
    value: "vemireddyomr@gmail.com",
  },
  instagram: {
    label: "Instagram",
    value: "vemireddy_official",
  },
  linkedIn: {
    label: "LinkedIn",
    value: "Madhava Reddy Vemireddy",
  },
  phone: {
    label: "Urgent Call",
    number1: "+91 8886380746",
    number2: "+91 6301804286",
  },
  socialLinks: {
    github: "https://github.com/Madhava-Reddy",
    gmail: "mailto:vemireddyomr@gmail.com",
    linkedin: "https://www.linkedin.com/in/madhava-reddy-vemireddy-9a0826167",
    whatsapp: "https://wa.me/8886380746",
    instagram: "https://www.instagram.com/vemireddy_official",
    snapchat: "https://snapchat.com/t/vqDce9B7",
  },
};

const contactDetailsSlice = createSlice({
  name: "contactDetails",
  initialState,
  reducers: {
    setContactDetails: (state, action: PayloadAction<Partial<ContactDetailsState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setContactDetails } = contactDetailsSlice.actions;
export default contactDetailsSlice.reducer;
