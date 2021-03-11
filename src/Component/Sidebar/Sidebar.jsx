import React from 'react';
import './sidebar.css';
import box from '../../assets/icons/delivery-box.svg';

const Sidebar = () => {
  return (
    <div className=" sidebar col-12 col-md-5 order-md-1 order-2">
      <div className="mx-md-5 px-md-5">
        <img className="logo d-none d-md-block" src={box} />
        <div className="mt-4 pt-5 row flex-column">
          <div className="d-flex justify-content-between">
            Trial and Pricing
            <span className="">
              <i class="fas fa-arrow-right"></i>
            </span>
          </div>
          <div className="mt-3 mb-3">Payment Method</div>
          <div>-------------</div>
          <div className="mb-5">Get started</div>

          <div className="mb-2  py-2 footer">
            <div className="d-flex px-3 py-2  flex-column justify-content-center align-items-center">
              Success is not final; failure is <br />
              not fatal. It is the courage to <br />
              continue that counts. <br />
              <footer class="align-items-start mr-2 blockquote-footer">
                Winston <cite title="Source Title">Churchill</cite>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
