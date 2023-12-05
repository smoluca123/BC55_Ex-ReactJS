import React from 'react';
import { TicketList } from './index';

export default function Tickets() {
  return (
    <div className="text-center">
      <h1 className="text-3xl text-title-main font-medium">
        Đặt vé xem phim CyberSoft
      </h1>
      <TicketList />
    </div>
  );
}
