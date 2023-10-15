import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function ProductCard() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div class="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                 Online-shopping
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/4  drop-shadow-lg ">
            <div
              className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="flex justify-center cursor-pointer">
                <img
                  className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
              </div>
              <div className="p-5 border-t-2">
                <h2
                  className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                 Online-shopping
                </h2>
                <h1
                  className="title-font text-lg font-medium text-gray-900 mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  This is title
                </h1>
                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                <p
                  className="leading-relaxed mb-3"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹ 500
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        <div className="p-4 md:w-1/4  drop-shadow-lg ">
          <div
            className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            style={{
              backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div className="flex justify-center cursor-pointer">
              <img
                className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                src="https://dummyimage.com/720x400"
                alt="blog"
              />
            </div>
            <div class="px-5 pb-5">
              <a href="#">
                <h5
                  class="text-xl font-semibold tracking-tight text-gray-900 "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.0
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span
                  class="text-3xl font-bold text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  $599
                </span>
                <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm py-2" style={{width : "100px"}}

                    // className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm w-full  py-2" 
                  >
                    Add To Cart
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}

export default ProductCard;
