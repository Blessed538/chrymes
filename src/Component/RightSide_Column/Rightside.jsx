import React from 'react';
import './Rightside.css';
import government from '../../assets/icons/government.svg';
import corperate from '../../assets/icons/multiple-users-silhouette.svg';
import calender from '../../assets/icons/calendar.svg';
import bars from '../../assets/icons/bars.svg';
import contract from '../../assets/icons/contract.svg';
import torch from '../../assets/icons/torch.svg';
import enterprise from '../../assets/icons/enterprise.png';
import statistics from '../../assets/icons/statistics.svg';
import dispute from '../../assets/icons/dispute.svg';
import crm from '../../assets/icons/crm.svg';

const Rightside = () => {
  return (
    <div className="order-md-2 py-3 order-1 col-12 col-md-7">
      <div className="ww">
        <div className="row  w-100">
          <div className="col-md-6 mb-4 col-sm-12">
            HEY, TERRY
            <br />
            <p className="mb-0" style={{ color: 'black' }}>
              Start your <span style={{ color: 'yellow' }}>30 Days</span> Trial
            </p>
            <br />
            <p style={{ fontSize: '10px' }} className="">
              select your preferred package below
            </p>
          </div>

          <div className="col-md-6 col-sm-12">
            N<br />
            <span> 1,999,999</span>
            <br />
            Total(EXCLUDES VAT)
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mt-5 pt-4 pl-4 justify-content-center  align-items-center side mr-2">
            <div className="justify-content-center mb-0 align-items-center">
              <span>Start From</span> <br />
              <p className="mb-0">NGN</p>
              N5,999,999,99 <br />
              per annum
              <h3 style={{ fontSize: '14px' }} className="mt-3">
                Premium
              </h3>
              <p style={{ fontSize: '10px' }}>All users * All modules</p>
            </div>
          </div>

          <div className="side_2  py-4 col-md-5">
            <div className=" justify-content-center align-items-center py-3 px-3">
              <h4 style={{ color: 'blue' }}>Basic</h4>
              <p>30 days trail on our premuim app features and features</p>
              <h4>Includes ----------</h4>
              <p className="mb-0">- 25 Users</p>
              <p className="mb-0">- All modules and features</p>
              <p className="mb-0">- Unlimited Commitees</p>
              <p className="mb-0">- Unlimited role creation</p>
            </div>
          </div>
        </div>

        <div className="mt-4 row flex-column">
          <div>Add more users</div>
          <div>NGN 99,999 per users</div>
        </div>

        <div className="left row mt-4 mb-4 mr-4">
          <div className="ml-3 col-12 col-md-12">
            All Modules
            <hr />
          </div>

          <div className="row  mt-3">
            <div className="col-md-4  col-12">
              <div className="d-flex  px-4 justify-content-between">
                <span className="px-3">
                  <img className="img" src={government} alt="portal" />
                </span>
                <p>Governance portal</p>
                <span className="px-2">
                  <img className="img" src={torch} alt="portal" />
                </span>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="d-flex  px-4 justify-content-between">
                <span className="px-3">
                  <img src={corperate} alt="" />
                </span>
                <p>Cooperate Universe</p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="d-flex  px-4  justify-content-between">
                <span className="px-3">
                  <img src={contract} alt="contract" />
                </span>
                <p className="">contract Domain</p>
              </div>
            </div>
          </div>

          <div className="row mt-2 justify-content-between">
            <div className="col-md-4  col-12">
              <div className="d-flex  px-4 justify-content-between">
                <span className="px-3">
                  <img src={crm} alt="contract" />
                </span>
                Investors Relations
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="d-flex  px-4 justify-content-between">
                <span className="px-3">
                  <img src={dispute} alt="dispute" />
                </span>
                Dispute Portfolio
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="d-flex px-4 justify-content-between">
                <span className="px-3">
                  <img src={calender} alt="calender" />
                </span>
                <p className="mb-0">Minute Book</p>
              </div>
            </div>
          </div>

          <div className="row mt-2 mb-2 justify-content-between">
            <div className="col-md-4  col-12">
              <div className="d-flex  px-4 justify-content-between">
                <span className="px-3">
                  <img src={statistics} alt="reporting" />
                </span>
                Reporting Tool
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="d-flex  px-4 justify-content-between">
                <span className="px-2">
                  <img src={corperate} alt="" />
                </span>
                Attendance Register
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="d-flex  px-4 justify-content-between"></div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-6 col-12">
            <div style={{ color: 'orange' }} className="back">
              GO BACK
            </div>
          </div>
          <div className="col-md-6 col-12">
            <button className="button">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
