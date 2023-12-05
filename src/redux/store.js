import { configureStore } from '@reduxjs/toolkit';
import TicketReducer from './slices/TicketSlice';
const store = configureStore({
  reducer: {
    tickets: TicketReducer,
  },
});

export default store;
