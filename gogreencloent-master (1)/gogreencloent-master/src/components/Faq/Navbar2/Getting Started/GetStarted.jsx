import React from "react";
import "./getstarted.css";
const GetStarted = () => {
  return (
    <>
      <div className="container gettingstarted__main">
        <div className="row">
          <div className="col">
            <div class="accordion" id="accordionExample">
              {/* 1st faq getstarted starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    style={{ color: "black" }}
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Why should I sell on Go Green?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body text-start">
                    Go Green is the leader in Indian e-commerce with maximum
                    online reach and highest credibility. With more than 10
                    crore registered customers, 10 million daily page visits and
                    the lowest cost of doing business, we are the strongest
                    partner to take your products to customers all over India.
                    We have sale events that give each seller an equal
                    opportunity to grow their business online.
                  </div>
                </div>
              </div>
              {/* 1st faq getstarted ends */}

              {/* 2nd faq getstarted starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    style={{ color: "black" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Can I offer both products and services on Go Green?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body text-start">
                    Currently, you can sell products and not services on Go
                    Green.{" "}
                  </div>
                </div>
              </div>
              {/* 2nd faq getstarted ends */}

              {/* 3rd faq getstarted starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    style={{ color: "black" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do I need to courier my products to Go Green?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body text-start">
                    No, Go Green will handle shipping of your products. All you
                    need to do is pack the product and keep it ready for
                    dispatch. Our logistics partner will pick up the product
                    from you and deliver it to the customer.{" "}
                  </div>
                </div>
              </div>
              {/* 3rd faq getstarted ends */}

              {/* 4th faq getstarted starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    style={{ color: "black" }}
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Who decides the price of the Products?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body text-start">
                    No. Listing your products on gogreen.com is absolutely free.
                    Go Green does not charge anything for listing your catalogue
                    online. You only pay a small commission for what you sell.{" "}
                  </div>
                </div>
              </div>
              {/* 4th faq getstarted ends */}

              {/* 5th faq getstarted starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    style={{ color: "black" }}
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Who takes care of the delivery of my products?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body text-start">
                    The payment will be made directly to your bank account
                    through NEFT transactions.Go Green will settle your payments
                    within 7-15 business days based on your seller tier.{" "}
                  </div>
                </div>
              </div>

              {/* 5th faq getstarted ends */}

              {/* 6th faq getstarted starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    style={{ color: "black" }}
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    When can I start selling?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body text-start">
                    After all the required documents have been verified and your
                    seller profile is complete, you can start listing your
                    products and start selling.{" "}
                  </div>
                </div>
              </div>
              {/* 6th faq getstarted ends */}

              {/* 7th faq getstarted starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    style={{ color: "black" }}
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    How many listings are required to start selling?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body text-start">
                    You are required to have a minimum of 1 listings(unique
                    products) to start selling on Go Green.{" "}
                  </div>
                </div>
              </div>
              {/* 7th faq getstarted ends */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
