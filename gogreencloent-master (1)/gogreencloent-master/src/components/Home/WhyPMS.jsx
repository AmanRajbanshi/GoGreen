import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "./whypms.css";
import axios from "axios";

const WhyPMS = () => {
  const [users, setUser] = useState();
  const [info, setInfo] = useState([]);
  const [sales, setSales] = useState([]);

  const fetchAllUsers = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/findallusers"
    );
    try {
      console.log(data.data);
      const allUsers = data.data;
      setUser(allUsers.length);
      console.log(users);
      setInfo(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const findAllSales = async () => {
    const { data } = await axios.get("http://localhost:3000/api/v1/sales");
    try {
      console.log(data);
      setSales(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    findAllSales();
  }, []);

  const totalSales = sales
    ? sales.reduce((a, b) => {
        return a + b.product_amount;
      }, 0)
    : null;

  console.log(totalSales);
  const buyers = info
    ? info.filter((value) => {
        return value.role !== "Seller";
      })
    : null;

  const sellers = info
    ? info.filter((value) => {
        return value.role !== "Buyer";
      })
    : null;

  console.log(buyers);
  return (
    <div>
      <h1 className="PMS__title__main" style={{ color: "rgb(23, 177, 113)" }}>
        <Typewriter
          options={{
            strings: ["Our Family"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4 pms__card">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    style={{ color: "rgb(23, 177, 113)" }}
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />{" "}
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Total Buyers
                </h2>
                <p
                  style={{ Color: "rgb(23, 177, 113)" }}
                  className="leading-relaxed text-base "
                >
                  We are family of {buyers ? buyers.length : null} Buyers
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 pms__card">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    style={{ color: "rgb(23, 177, 113)" }}
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Total Sellers
                </h2>
                <p className="leading-relaxed text-base">
                  We are family of {sellers ? sellers.length : null} sellers
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 pms__card">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    style={{ color: "rgb(23, 177, 113)" }}
                  >
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Total Waste recycled
                </h2>
                <p className="leading-relaxed text-base">
                  We have recycled {totalSales ? totalSales : null} Kg of waste
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPMS;
