import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IProduct } from '../../types/Product';
import Loading from '../Loading';

const Home = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showProducts, setShowProducts] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    } catch (err) {
      setError('Error fetching the product data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();

    const timer = setTimeout(() => {
      setShowProducts(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showProducts) {
    return <Loading message="Loading products..." />;
  }

  if (loading) {
    return <Loading message="Loading products..." />;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="text-center p-4">
              <img src={product.image} alt={product.name} className="w-full h-auto" />
              <h5 className="text-lg font-semibold mt-4">{product.name}</h5>
              <p className="text-gray-700 mt-2">${product.price}</p>
            </div>
            <div className="p-4 flex justify-center">
              <Link
                to={`/product/${product.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
