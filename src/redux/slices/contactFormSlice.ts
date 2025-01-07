import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactFormState {
  title: string;
  fullNameLabel: string;
  emailLabel: string;
  mobileLabel: string;
  messageLabel: string;
  buttonLabel: string;
  successMessageTitle: string;
  successMessage: string;
}

const initialState: ContactFormState = {
  title: "Contact Us",
  fullNameLabel: "Your Full Name",
  emailLabel: "Email Address",
  mobileLabel: "Mobile Number",
  messageLabel: "Write Message",
  buttonLabel: "Send Message",
  successMessageTitle: "Thank you for choosing us!",
  successMessage: "Our team will contact you shortly."
};

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    setContactForm: (state, action: PayloadAction<ContactFormState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setContactForm } = contactFormSlice.actions;
export default contactFormSlice.reducer;
