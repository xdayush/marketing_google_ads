import React from 'react';
import './features.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Features() {
  return (
    <div className="  features-div">
      <h2 className="text-center mb-4 hta-title-f">Features</h2>
      <div className="d-flex flex-wrap justify-content-center">
        <div className=" flex-item-f">
          <div className="card card-f  ">
            <img src="/img/minidoc.avif" alt="Service 1" className="card-img-top" />
            <div className="card-body text-center">
              <h6 h6 className="card-steps-f">Minimum Documentation</h6>
            </div>
          </div>
        </div>
        <div className=" flex-item-f">
          <div className="card card-f">
            <img src="/img/fasterapproval.avif" alt="Service 2" className="card-img-top f-img" />
            <div className="card-body text-center">
              <h6 className="card-steps-f">Faster Approval</h6>
            </div>
          </div>
        </div>
        <div className=" flex-item-f">
          <div className="card card-f">
            <img src="/img/onlineprocess.jpg" alt="Service 3" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-steps-f">100% Online Process</h6>
            </div>
          </div>
        </div>
        <div className=" flex-item-f">
          <div className="card card-f">
            <img src="/img/loan.avif" alt="Service 4" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-steps-f">Loan up to Rs 40.0 Lacs</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
