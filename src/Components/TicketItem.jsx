import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedTicket } from '../redux/slices/TicketSlice';
import cn from 'classnames';
export default function TicketItem({ seat: item }) {
  const dispatch = useDispatch();
  const selectedTickets = useSelector((state) => state.tickets.selectedTickets);

  const handleSelect = (ticket) => {
    dispatch(selectedTicket(ticket));
  };
  return (
    <>
      <div key={item.row}>
        <h1 className="text-lightText-main text-xl font-black">{item.row}</h1>
      </div>
      {item.seats.map((seat, index) => {
        const isSelected = !!selectedTickets.find(
          (ticket) => ticket.name === seat.name
        );
        return (
          <button
            key={seat.name}
            className={cn(
              'text-center text-gray-900 hover:text-title-main hover:bg-gray-900 text-xl font-black bg-white w-[50px] h-[50px] p-2 transition duration-300',
              {
                'bg-gray-900 text-lightText-main cursor-not-allowed hover:text-red-500':
                  seat.booked,
                'bg-title-main': isSelected,
              }
            )}
            disabled={seat.booked}
            onClick={() => {
              handleSelect({
                ...item.seats[index],
                isSelected: !isSelected,
              });
            }}
          >
            {seat.name}
          </button>
        );
      })}
    </>
  );
}
