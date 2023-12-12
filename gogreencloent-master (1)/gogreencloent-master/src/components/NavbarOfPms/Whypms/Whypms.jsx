import React from "react";
import "./whypms.css";
const Whypms = () => {
  return (
    <>
      <div className="container mt-3 p-2" >
        <div className="row">
          <h3 className="title mb-3 p-3" style={{color:" #22c514"}}>Advantages of Selling on Go Green</h3>

          <div className="col-md-6  " >
            <div class="card card1  mb-3 " >
              <div class="row g-0">
                <div class="col-md-4">
                  <img style={{width:"150px",height:"80px"}}
                    src="https://img1a.flixcart.com/fk-sp-static/images/GrowthSellIcon.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "16px",color:" #22c514" }}>
                      Growth
                    </h5>
                    <small class="card-text text-center">
                      Widen your reach to a customer base of billion and grow
                      your business further with the support of Acoount
                      managers.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6  ">
            <div class="card card2 mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img style={{width:"150px",height:"80px"}}
                    src="https://img1a.flixcart.com/fk-sp-static/images/CostSellIcon.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "16px",color:" #22c514" }}>
                      Lowest cost of doing business
                    </h5>
                    <small class="card-text text-center">
                      Along with the most competitive rate card in the industry
                      you aslo get on-time and reliable payments.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div class="card card3 mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img style={{width:"150px",height:"80px"}}
                    src="https://img1a.flixcart.com/fk-sp-static/images/EasySellIcon.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "16px",color:" #22c514" }}>
                      Ease
                    </h5>
                    <small class="card-text text-center">
                      You just need 1 product and documents to start selling on
                      PMS.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6  ">
            <div class="card card4 mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img style={{width:"150px",height:"80px"}}
                    src="https://img1a.flixcart.com/fk-sp-static/images/TransparencySellIcon.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "16px",color:" #22c514" }}>
                      Transparency
                    </h5>
                    <small class="card-text text-center">
                      Equal opportunities for all the sellers to grow.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whypms;
