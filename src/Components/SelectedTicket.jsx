import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTicket } from '../redux/slices/TicketSlice';
export default function SelectedTicket() {
  const selectedTickets = useSelector((state) => state.tickets.selectedTickets);
  const totalPrice = useSelector((state) => state.tickets.totalPrice);
  const dispatch = useDispatch();
  const handleRemoveTicket = (ticket) => {
    dispatch(removeTicket(ticket));
  };
  return (
    <div>
      <h1 className="text-center text-3xl text-title-main font-medium">
        Danh sách vé đã chọn
      </h1>
      <div className="mt-20 px-6">
        <h1 className="mb-2 text-lightText-main text-2xl flex items-center font-medium">
          <span className="inline-block w-8 h-8 bg-gray-900 mr-2"></span> Ghế đã
          đặt
        </h1>
        <h1 className="mb-2 text-lightText-main text-2xl flex items-center font-medium">
          <span className="inline-block w-8 h-8 bg-title-main mr-2"></span> Ghế
          đang chọn
        </h1>
        <h1 className="mb-2 text-lightText-main text-2xl flex items-center font-medium">
          <span className="inline-block w-8 h-8 bg-white mr-2"></span> Ghế chưa
          đặt
        </h1>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-md font-medium text-title-main uppercase tracking-wider">
              Số Ghế
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-title-main uppercase tracking-wider">
              Giá
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-title-main uppercase tracking-wider">
              Hủy
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedTickets.map((item) => (
            <tr key={item.name}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-md font-medium text-title-main">
                  {item.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-md font-medium text-title-main">
                  {item.price}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-lg font-medium text-red-500">
                  <button
                    className="px-2"
                    onClick={() => handleRemoveTicket(item)}
                  >
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {selectedTickets.length > 0 && (
            <tr>
              <td className="px-6 py-3 text-left text-md font-medium text-title-main uppercase tracking-wider">
                Tổng giá :
              </td>
              <td></td>
              <td className="px-6 py-3 text-left text-md font-medium text-title-main uppercase tracking-wider">
                {totalPrice}
                VND
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
