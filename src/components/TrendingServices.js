import React from 'react';
import './TrendingServices.css';

const services = [
  { title: 'Personal Loan', image: '/img/personal-loan.avif' },
  { title: 'Business Loan', image: '/img/business-loan.jpg' },
  { title: 'Home Loan', image: '/img/home-loan.jpg' },
  { title: 'Professional Loan', image: '/img/professional-loan.jpg' },
  { title: 'Machinery Loan', image: '/img/machinery-loan.webp' },
  { title: 'Loan Against Property', image: '/img/loan-against-property.webp' },
  { title: 'Auto Loan', image: '/img/auto-loan.avif' },
  { title: 'Doctor Loan', image: '/img/doctor-loan.jpg' },
];

function TrendingServices() {
  return (
    <div className='bg-trending'>
      <div className="container my-5 text-center ts-div">
        <h2 className="text-center"><b>Trending Services</b></h2>
        <div className="row my-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="card card-ts">
                <img src={service.image} alt={service.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingServices;
