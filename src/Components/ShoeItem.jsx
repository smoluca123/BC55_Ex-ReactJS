import React from 'react';

export default function ShoeItem({ shoe, onSelect }) {
  const { name, price, image, shortDescription } = shoe;
  return (
    <div>
      <div className="card my-5">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            <div className="row">
              <div className="col-9">
                <h5>{name}</h5>
              </div>
              <div className="col-3">
                <h5 className="text-end">${price}</h5>
              </div>
            </div>
            <div
              className="row pt-2 mt-2"
              style={{ borderTop: '1px solid black' }}
            >
              <div className="col-8">
                <p>{shortDescription}</p>
              </div>
              <div className="col-4 text-end">
                <button
                  className="btn btn-primary"
                  onClick={() => onSelect(shoe)}
                >
                  View Product
                </button>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
