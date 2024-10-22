import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products = [
  { id: 1, name: 'Giày Thể Thao Nam', description: 'Giày thể thao thoải mái cho vận động hàng ngày.', price: 49.99, image: require("assets/img/sport_shoe_1.jpg") },
  { id: 2, name: 'Giày Thể Thao Nữ', description: 'Giày thể thao thời trang cho các hoạt động ngoài trời.', price: 59.99, image: require("assets/img/sport_shoe_2.jpg") },
  { id: 3, name: 'Giày Cao Gót Đen', description: 'Giày cao gót sang trọng, lý tưởng cho các buổi tiệc.', price: 79.99, image: require("assets/img/high_heel_1.jpg") },
  { id: 4, name: 'Giày Cao Gót Trắng', description: 'Giày cao gót trắng thanh lịch, thích hợp với nhiều trang phục.', price: 69.99, image: require("assets/img/high_heel_2.jpg") },
  { id: 5, name: 'Giày Sandal Nữ', description: 'Giày sandal thoáng khí, hoàn hảo cho mùa hè.', price: 29.99, image: require("assets/img/sandal_1.jpg") },
  { id: 6, name: 'Giày Sandal Nam', description: 'Giày sandal nam năng động, thích hợp cho các chuyến dã ngoại.', price: 39.99, image: require("assets/img/sandal_2.jpg") },
  { id: 7, name: 'Giày Lười Nữ', description: 'Giày lười nữ thoải mái và phong cách cho mọi hoạt động.', price: 44.99, image: require("assets/img/loafers_1.jpg") },
  { id: 8, name: 'Giày Lười Nam', description: 'Giày lười nam cổ điển, phù hợp với trang phục công sở.', price: 54.99, image: require("assets/img/loafers_2.jpg") },
  { id: 9, name: 'Giày Thể Thao Chạy', description: 'Giày chạy thể thao nhẹ, giúp tối ưu hóa hiệu suất chạy.', price: 59.99, image: require("assets/img/running_shoe_1.jpg") },
  { id: 10, name: 'Giày Sneaker Đen', description: 'Giày sneaker đen trẻ trung và thời trang.', price: 49.99, image: require("assets/img/sneaker_1.jpg") },
  { id: 11, name: 'Giày Sneaker Trắng', description: 'Giày sneaker trắng sạch sẽ, dễ dàng kết hợp với trang phục.', price: 54.99, image: require("assets/img/sneaker_2.jpg") },
  { id: 12, name: 'Giày Boot Nam', description: 'Giày boot nam chắc chắn, thích hợp cho mùa đông.', price: 89.99, image: require("assets/img/boot_1.jpg") },
];


const productList: React.FC = () => {
  return (
    <>
      <section className="block relative z-1 bg-blueGray-600">
        <div className="justify-center text-center flex flex-wrap mt-24">
          
          {/* Phần giao diện nằm bên trái */}
          <section className="block relative z-1 bg-blueGray-600">
            <div className="container mx-auto flex items-center mt-24">
              {/* Hình chữ nhật đỏ */}
              <div className="w-4 h-8 bg-red-500 rounded"></div>
              {/* Text "Our Products" */}
              <span className="text-red-500 text-lg font-semibold ml-2">Our Products</span>
            </div>
          </section>
          
          <h1 className="font-semibold text-4xl">Explore Our Products</h1>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              alt={product.name}
              className="w-full h-48 object-cover"
              src={product.image}
            />
            <div className="p-4">
              <h5 className="text-lg font-semibold">{product.name}</h5>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-bold text-red-500">{`$${product.price.toFixed(2)}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
          Xem thêm sản phẩm
        </button>
      </div>
    </div>
    </section>

    </>
  );
};
export default productList;