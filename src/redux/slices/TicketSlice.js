import { createSlice } from '@reduxjs/toolkit';

const ticketReducer = createSlice({
  name: 'tickets',
  initialState: {
    selectedTickets: [],
    totalPrice: 0,
  },
  reducers: {
    selectedTicket: (state, action) => {
      const { isSelected, ...seat } = action.payload;
      if (isSelected) {
        return {
          ...state,
          selectedTickets: [...state.selectedTickets, seat],
          totalPrice: state.totalPrice + seat.price,
        };
      }
      return {
        ...state,
        selectedTickets: state.selectedTickets.filter(
          (ticket) => ticket.name !== seat.name
        ),
        totalPrice: state.totalPrice - seat.price,
      };
    },
    removeTicket: (state, action) => {
      const { name, price } = action.payload;
      return {
        ...state,
        selectedTickets: state.selectedTickets.filter(
          (ticket) => ticket.name !== name
        ),
        totalPrice: state.totalPrice - price,
      };
    },
  },
});

export const { selectedTicket, removeTicket } = ticketReducer.actions;
export default ticketReducer.reducer;
