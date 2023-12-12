import React from "react";

const Listing = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              {/* 1st faq Listing starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    What is Listing?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse "
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    Listing a product refers to filling out all the necessary
                    information and adding images of the product so that a
                    customer can make an informed buying decision.
                  </div>
                </div>
              </div>
              {/* 1st faq Listing ends */}

              {/* second faq Listing starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How many products do I need o list to start selling?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse "
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    You are required to have a minimum of 1 listings to start
                    selling on gogreen.com?
                  </div>
                </div>
              </div>

              {/* second faq Listing ends */}
              {/* third faq Listing starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How do I list my products on Go Green?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse "
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    We give you a step-by-step process of how to list your
                    products on our website. It is important to choose the most
                    suitable category to list your product as it will help
                    customers find your products faster. Based on the category
                    you choose, you'll be asked to include product details such
                    as size, model, color, etc.
                  </div>
                </div>
              </div>

              {/* third faq Listing ends */}
              {/* fourth faq Listing starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Can I get help for the development of the catalog
                    (productsimages,description,etc.)?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  class="accordion-collapse collapse "
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    Yes, we are happy to help you at every stage while doing
                    business with us. We help you connect with industry experts
                    for the development of your catalogs. With the help of our
                    catalog partners across India, you can have attractive
                    images and crisp content developed at unbeatable prices.
                  </div>
                </div>
              </div>

              {/* Fourth faq Listing ends */}
              {/* fifth faq Listing starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    How does a catalog partner help me?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    Our catalog partners develop high-quality photographs of
                    your products and crisp product descriptions for your
                    product catalog. A good catalog gives your customers a
                    better understanding of your products and helps boost your
                    sales. List of cataloging partners here.
                  </div>
                </div>
              </div>
              {/* fifth faq Listing ends */}

              {/* sixth faq Listing starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    How do I price my products?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  class="accordion-collapse collapse "
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    When pricing products on Flipkart, please account for the
                    applicable Marketplace Fee and include a suitable margin to
                    arrive at the Selling Price. For ease of calculation, you
                    can use our Commission Calculator widget once onboarded.
                  </div>
                </div>
              </div>
              {/* sixth faq Listing ends */}
              {/* 7th faq Listing starts */}

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    Will I get chraged for listing on Go Green?
                  </button>
                </h2>
                <div
                  id="flush-collapseSeven"
                  class="accordion-collapse collapse "
                  aria-labelledby="flush-headingSeven"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body text-start">
                    {" "}
                    No. Listing of products on Flipkart.com is absolutely free.
                    Flipkart does not charge anything to you for listing your
                    catalogue online. You only pay a small commission for what
                    you sell.
                  </div>
                </div>
              </div>

              {/* 7th faq Listing ends */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
