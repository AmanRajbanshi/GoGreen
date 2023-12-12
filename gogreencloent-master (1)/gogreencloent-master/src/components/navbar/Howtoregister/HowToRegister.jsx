import React from 'react'

const HowToRegister = () => {
  return (
      <>
    <div className="container mt-3 p-2" >
        <div className="row">
          <h3 className='title mb-3 p-3' style={{color:" #22c514"}}>You need just 3 things to become a Go Green Seller</h3>

          <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6  " >
            <div class="card card1  mb-3 " >
              <div class="row g-0">
                <div class="col-md-4">
                  <img style={{width:"150px",height:"80px"}}
                    src="https://img1a.flixcart.com/fk-sp-static/images/ProductIcon.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "16px",color:" #22c514" }}>
                      At least 1 product to sell
                    </h5>
                    <small class="card-text text-center">
                      All you need is a minimum of 1 unique product to start sellingon Go Green.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 ">
            <div class="card card2 mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img style={{width:"150px",height:"80px"}}
                    src="https://img1a.flixcart.com/fk-sp-static/images/GSTINIcon.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "16px",color:" #22c514" }}>
                    GSTIN details
                    </h5>
                    <small class="card-text text-center">
                     You are required to furnish the details of your GSTIN to sell your product online.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
            <div class="card card3 mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img style={{width:"150px",height:"80px"}}
                    src="https://img1a.flixcart.com/fk-sp-static/images/CheckSheetIcon.svg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "16px",color:" #22c514" }}>
                      Cancelled cheque
                    </h5>
                    <small class="card-text text-center">
                      A copy  of the cancelled cheque of your bank account is mandatory of registering.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default HowToRegister