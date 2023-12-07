import React from 'react';
import data from '../data/data.json';

import TicketItem from './TicketItem';
export default function TicketList() {
  const pointer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <h1 className="my-5 text-1xl font-medium text-lightText-main">
        Màn hình
      </h1>
      <div
        className="w-full h-5"
        style={{
          clipPath: 'polygon(8.75% 0%, 91.5% 0%, 100% 100%, 0% 100%)',
          backgroundColor: 'white',
        }}
      ></div>
      <div className="-mt-4 h-5 !shadow-custom1 !shadow-title-main"></div>

      <div className="grid grid-cols-[repeat(13,_1fr)] gap-4 h-full">
        <div className=""></div>
        {pointer.map((item) => (
          <div key={item}>
            <h1 className="text-lightText-main text-xl font-black">{item}</h1>
          </div>
        ))}

        {data && data.map((item) => <TicketItem seat={item} />)}
      </div>
    </div>
  );
}
