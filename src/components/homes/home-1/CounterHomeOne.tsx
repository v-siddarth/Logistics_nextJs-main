
import React from 'react';

const CounterHomeOne = () => {
  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <div className="counter-single-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="counter-numbar">
                  <h4 className="counter">60</h4>
                  <span>+</span>
                </div>
                <div className="counter-content">
                  <h4>Team member</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-single-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="counter-numbar">
                  <h4 className="counter">53</h4>
                  <span>+</span>
                </div>
                <div className="counter-content">
                  <h4>Complete Project</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-single-box wow fadeInUp" data-wow-delay="0.6s">
                <div className="counter-numbar">
                  <h4 className="counter">3</h4>
                  <span>K+</span>
                </div>
                <div className="counter-content">
                  <h4>Winning award</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-single-box count wow fadeInUp" data-wow-delay="0.8s">
                <div className="counter-numbar">
                  <h4 className="counter">1</h4>
                  <span>K+</span>
                </div>
                <div className="counter-content">
                  <h4>Client Review</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterHomeOne;