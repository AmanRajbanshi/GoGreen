import React from "react";

const PriceingAndPayment = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              {/* 1st faq management and shipping starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button style={{color:"black"}}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    Who decides the price of the products?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    As a seller, you will set the price of your products.{" "}
                  </div>
                </div>
              </div>
              {/* 1st faq management and shipping ends */}

              {/* second faq management and shipping starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button style={{color:"black"}}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What are the fees charged?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    <h6>
                      {" "}
                      The following deductions are made from the order item
                      value:
                    </h6>
                    <p>
                      Commision fee: A percentage of the order item based on
                      vertical/sub-category.
                    </p>
                  </div>
                </div>
              </div>

              {/* second faq management and shipping ends */}



              {/* third faq management and shipping starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button style={{color:"black"}}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Please give an example to show the cost calculation.
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    Through our seller dashboard, we make it really easy for you
                    to manage your orders. Whenever a customer places an order,
                    we will send you an e-mail alert. You need to pack the order
                    and keep it ready for dispatch within the time frame
                    provided by you and inform us through the seller portal.
                    This will alert our logistics partner to pick up the product
                    from you.
                  </div>
                </div>
              </div>

              {/* third faq management and shipping ends */}


              {/* fourth faq management and shipping starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button style={{color:"black"}}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Does Go Green provide packaging material?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    We have a strong network of best packaging material
                    providers in the industry. We can connect you with them to
                    get good quality packaging material which impresses the
                    customers and ensures your products remain undamaged.
                  </div>
                </div>
              </div>

              {/* Fourth faq management and shipping ends */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceingAndPayment;
