import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMEssage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendMEssage: state => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail, openSendMEssage, closeSendMEssage } = mailSlice.actions;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export const selectOpenMail = state => state.mail.selectedMail;

export default mailSlice.reducer;
