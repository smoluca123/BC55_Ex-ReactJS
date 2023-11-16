import React from 'react';
import ShoeItem from './ShoeItem';

export default function ShoeList({ data, onSelect }) {
  return (
    <div className="row">
      {data.map((shoe) => (
        <div className="col-3" key={shoe.id}>
          <ShoeItem shoe={shoe} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}
