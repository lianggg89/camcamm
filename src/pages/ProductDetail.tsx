// ProductDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Dữ liệu mẫu sản phẩm giống như trong ProductList
const products: Product[] = [
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

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return <div className="text-center">Không tìm thấy sản phẩm.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-4" />
      <p className="text-lg mb-2">{product.description}</p>
      <p className="text-xl font-bold text-red-500 mb-4">{`$${product.price.toFixed(2)}`}</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductDetailPage;
