import React from 'react';

export default function Preview({ glassPreview }) {
  return (
    <div className="my-5 preview text-center">
      <div className="preview-img">
        <img src="./img/model.jpg" alt="" height={400} />
        {glassPreview && (
          <>
            <div className="preview-overlay">
              <img src={glassPreview.url} alt={glassPreview.name} />
            </div>
            <div className="preview-text">
              <h3>
                {glassPreview.name} - {glassPreview.price}$
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
