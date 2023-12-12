import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/Contact/Contact";
import About from "./components/About";
import Blog from "./components/blog/Blog";
import Signup from "./components/Register";
import Profile from "./components/Profle/Profile";
import SignIn from "./components/SignIn";
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/dashboard/MYDASHBOARD";
import { Toaster } from "react-hot-toast";
import Blogpost from "./components/Blogpost/Blogpost";
import CreatePost from "./components/createAPost/CreatePost";
import ViewUserProfile from "./components/ViewUserProfile/ViewUserProfile";
import ScrollToTop from "./components/ScrollToTop";
import CommentOnBlog from "./components/commentOnBlog/CommentOnBlog";
import UserCheckoutDetails from "./components/UserCheckoutDetails/UserCheckoutDetails";
import GetStarted from "./components/Faq/Navbar2/Getting Started/GetStarted";
import Listing from "./components/Faq/Navbar2/Listing/Listing";
import OrderManagementAndShipping from "./components/Faq/Navbar2/OrderManagementAndShipping/OrderManagementAndShipping";
import PriceingAndPayment from "./components/Faq/Navbar2/PricingAndPayment/PriceingAndPayment";
import HowToRegister from "./components/NavbarOfPms/Howtoregister/HowToRegister";
import Whysellonline from "./components/NavbarOfPms/Whysellonline/Whysellonline";
import Whygogreen from "./components/NavbarOfPms/Whygogreen/Whygogreen";
import Whypms from "./components/NavbarOfPms/Whypms/Whypms";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./Footer/Footer";
import AericaCart from "./components/AericaCart/AericaCart";
import AddAreca from "./components/AddAreca/AddAreca";
import Aerika from "./components/Aerika/Aerika";
import UpdateUSerInfo from "./components/UpdateUserInfo/UpdateUserInfo";
import UpdateUserPic from "./components/UpdateUserPic";
import AllSalesItems from "./components/AllSalesItems/AllSalesItems";

function App() {
  localStorage.setItem("mycart", JSON.stringify([]));
  return (
    <div className="App">
      <Toaster />
      <Router>
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Navbar />
                  <Contact />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/checkout/details/:id"
              element={
                <>
                  <Navbar />
                  <UserCheckoutDetails />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <About />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/comment/:blogId"
              element={
                <>
                  <Navbar />
                  <CommentOnBlog />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <>
                  <Signup />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/blog"
              element={
                <>
                  <Navbar />
                  <Blog />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <>
                  <Navbar />
                  <Profile />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/aericacart"
              element={
                <>
                  <Navbar />
                  <AericaCart />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/add-aerika"
              element={
                <>
                  <Navbar />
                  <AddAreca />
                  <Footer />
                </>
              }
            />
            <Route
              path="/aerika"
              element={
                <>
                  <Navbar />
                  <Aerika />
                  <Footer />
                </>
              }
            />

            <Route
              path="/signin"
              element={
                <>
                  <SignIn />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/user-profile/:id"
              element={
                <>
                  <Navbar />
                  <ViewUserProfile />
                </>
              }
            ></Route>
            <Route
              path="/blog/blogpost"
              element={
                <>
                  <Navbar />
                  <Blogpost />
                  <Footer />
                </>
              }
            ></Route>

            <Route
              path="/createpost"
              element={
                <>
                  <Navbar />
                  <CreatePost />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/cart/:id"
              element={
                <>
                  <Navbar />
                  <Checkout />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/getstarted"
              element={
                <>
                  {" "}
                  <GetStarted /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/listing"
              element={
                <>
                  {" "}
                  <Listing /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/ordermanagementandshipping"
              element={
                <>
                  {" "}
                  <OrderManagementAndShipping /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/priceingandpayment"
              element={
                <>
                  {" "}
                  <PriceingAndPayment /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/howtoregister"
              element={
                <>
                  {" "}
                  <HowToRegister /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/whysellonline"
              element={
                <>
                  {" "}
                  <Whysellonline /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/whypms"
              element={
                <>
                  {" "}
                  <Whypms /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/whygogreen"
              element={
                <>
                  {" "}
                  <Whygogreen /> <Footer />
                </>
              }
            ></Route>
            <Route
              path="/update-user-info/:info"
              element={
                <>
                  <UpdateUSerInfo />
                </>
              }
            ></Route>
            <Route
              path="/update-user-pic"
              element={
                <>
                  <UpdateUserPic />
                </>
              }
            ></Route>
            <Route
              path="/all-sales-item"
              element={
                <>
                  <Navbar />
                  <AllSalesItems />
                </>
              }
            ></Route>
            <Route
              path="*"
              element={
                <>
                  {" "}
                  <PageNotFound />{" "}
                </>
              }
            ></Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
