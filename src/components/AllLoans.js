import React from 'react';
import './Allloan.css'

export default function AllLoans() {
  const cardStyle = {
    width: '18rem',
    display: 'inline-block', // Added inline-block display
    margin: '0 10px 10px 0', // Added margin for spacing between cards
  };

  return (
    <div className='margin-div'>
        <h2>Loans We Offer</h2>
      <div className="card my-2 mx-4" style={cardStyle}>
        <img
          src="/img/F2-Fintech-logo-1.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
        </div>
      </div>
      <div className="card my-2 mx-2" style={cardStyle}>
        <img
          src="/img/F2-Fintech-logo-1.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
        </div>
      </div>
      <div className="card my-2 mx-2" style={cardStyle}>
        <img
          src="/img/F2-Fintech-logo-1.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          
        </div>
      </div>
      <div className="card my-2 mx-2" style={cardStyle}>
        {/* Replace "..." with your actual image source */}
        <img
          src="/img/F2-Fintech-logo-1.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card my-2 mx-4" style={cardStyle}>
        {/* Replace "..." with your actual image source */}
        <img
          src="/img/F2-Fintech-logo-1.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card my-2 mx-2" style={cardStyle}>
        {/* Replace "..." with your actual image source */}
        <img
          src="/img/F2-Fintech-logo-1.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
     
    </div>
  );
}
