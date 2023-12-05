import { createSlice } from '@reduxjs/toolkit';

const ticketReducer = createSlice({
  name: 'tickets',
  initialState: {
    selectedTickets: [],
  },
  reducers: {
    selectedTicket: (state, action) => {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        return { ...state, selectedTickets: [...state.selectedTickets, seat] };
      }
      return {
        selectedTickets: state.selectedTickets.filter(
          (ticket) => ticket.name !== seat.name
        ),
      };
    },
    removeTicket: (state, action) => {
      return {
        selectedTickets: state.selectedTickets.filter(
          (ticket) => ticket.name !== action.payload.name
        ),
      };
    },
  },
});

export const { selectedTicket } = ticketReducer.actions;
export default ticketReducer.reducer;
