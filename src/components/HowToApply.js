import React from 'react';
import './howtoapply.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HowToApply() {
  return (
    <div className="how-to-apply-div">
      <h2 className="text-center mb-4 hta-title">How To Apply</h2>
      <div className="d-flex justify-content-center">
        <div className="flex-item">
          <div className="card no-border">
            <img src="/img/step1.avif" alt="Service 1" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-steps">Step:1</h6>
              <h6 className="card-title">Complete the form with your basic details</h6>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="card no-border">
            <img src="/img/step2.avif" alt="Service 2" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-steps">Step:2</h6>
              <h6 className="card-title">Our team at F2 Fintech will review</h6>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="card no-border">
            <img src="/img/step3.avif" alt="Service 3" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-steps">Step:3</h6>
              <h6 className="card-title">All your information is verified & meets criteria</h6>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="card no-border">
            <img src="/img/step4.jpg" alt="Service 4" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-steps">Step:4</h6>
              <h6 className="card-title">Your loan will be approved.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToApply;
