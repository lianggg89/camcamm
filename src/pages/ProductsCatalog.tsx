import React from "react";
import { Link } from "react-router-dom";
import Male from "./Shoes/Male";
import Female from "./Shoes/Female";
import Kids from "./Shoes/Kids";
// Nếu có thể truyền props vào component, hãy thêm type cho chúng
const productcatalog: React.FC = () => {
  return (
    <>
      {/* 3 DANH MỤC */}
      <section className="block relative z-1 bg-blueGray-600">
        <div className="justify-center text-center flex flex-wrap mt-24">
          
          {/* Phần giao diện nằm bên trái */}
          <section className="block relative z-1 bg-blueGray-600">
            <div className="container mx-auto flex items-center mt-24">
              {/* Hình chữ nhật đỏ */}
              <div className="w-4 h-8 bg-red-500 rounded"></div>
              {/* Text "Our Products" */}
              <span className="text-red-500 text-lg font-semibold ml-2">Categories</span>
            </div>
          </section>

          <h1 className="font-semibold text-4xl">Browse By Category</h1>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 -mt-24">
              <div className="flex flex-wrap">
                {/* Giày Nam */}
                <div className="w-full lg:w-4/12 px-4 mb-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Giày Nam
                  </h5>
                  <Link to="./Shoes/Male">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Giày Nam"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/banner_1.webp")}
                      />
                    </div>
                  </Link>
                </div>

                {/* Giày Nữ */}
                <div className="w-full lg:w-4/12 px-4 mb-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Giày Nữ
                  </h5>
                  <Link to="./Shoes/Female">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Giày Nữ"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/banner_2.webp")}
                      />
                    </div>
                  </Link>
                </div>

                {/* Giày Trẻ Em */}
                <div className="w-full lg:w-4/12 px-4 mb-6">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Giày Trẻ Em
                  </h5>
                  <Link to="./Shoes/Kids">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Giày Trẻ Em"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/banner_3.jpg")}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default productcatalog;
