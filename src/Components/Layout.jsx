import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ShoeList from './ShoeList';
import ShoeDetail from './ShoeDetail';
import data from './shoes.json';

export default function Layout() {
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const handleSelectedShoe = (shoe) => {
    setSelectedShoe(shoe);
    setIsShow(true);
  };
  const handleCloseModal = () => {
    setSelectedShoe(null);
    setIsShow(false);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <ShoeList data={data} onSelect={handleSelectedShoe} />
      <ShoeDetail
        selectedShoe={selectedShoe}
        isShow={isShow}
        onClose={handleCloseModal}
      />
    </div>
  );
}
