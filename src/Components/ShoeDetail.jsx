import React from 'react';

export default function ShoeDetail({ selectedShoe, isShow, onClose }) {
  if (!selectedShoe) {
    return null;
  }
  const { id, name, price, image, description, quantity } = selectedShoe;
  return (
    <div>
      {isShow && (
        <>
          <div
            className="overlay"
            style={{
              position: 'fixed',
              top: '0',
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => {
              if (e.target.className === 'modal modal-lg') {
                onClose();
                return;
              }
            }}
          >
            <div
              className="modal modal-lg"
              style={{
                display: 'block',
                position: 'absolute',
                zIndex: '999',
              }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{name}</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={onClose}
                    />
                  </div>
                  <div className="modal-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>image</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">{id}</td>
                          <td>{name}</td>
                          <td>{description}</td>
                          <td>{quantity}</td>
                          <td>{price}</td>
                          <td>
                            <img src={image} className="img-fluid" alt="..." />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
