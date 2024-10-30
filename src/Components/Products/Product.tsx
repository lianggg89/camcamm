import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { IProduct } from '../../types/Product';

const SizeSelection: React.FC<{
    sizes: string[],
    selectedSize: string,
    setSelectedSize: (size: string) => void
}> = ({ sizes, selectedSize, setSelectedSize }) => {
    return (
        <div className="mt-4">
            <div className="flex items-center gap-6 mt-2">
                <h2 className="text-lg font-medium">Size:</h2>
                <div className="flex gap-4">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            className={`w-10 h-10 flex items-center justify-center rounded border-2 ${selectedSize === size
                                ? 'bg-red-600 text-white border-red-600'
                                : 'bg-transparent text-black border-gray-400'
                                } font-medium text-sm`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [selectedColour, setSelectedColour] = useState<string>('');
    const [showImage, setShowImage] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [rating, setRating] = useState<number>(5);
    const [reviews, setReviews] = useState<{ name: string; email: string; comment: string; rating: number }[]>([]);

    const fetchProductData = useCallback(async () => {
        try {
            const response = await axios.get<IProduct>(`http://localhost:3000/products/${id}`);
            setProduct(response.data);
            setReviews(response.data.reviews || []); // Giả sử dữ liệu reviews nằm trong product
        } catch (err) {
            setError('Error fetching the product data');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchProductData();
    }, [fetchProductData]);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(event.target.value));
    };

    const toggleImageVisibility = () => {
        setShowImage((prev) => !prev);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newReview = { name, email, comment, rating };
        setReviews((prev) => [...prev, newReview]);
        setName('');
        setEmail('');
        setComment('');
        setRating(5); // Đặt lại đánh giá về mặc định
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="container mx-auto py-8">
            <p className="text-gray-600">
                <Link to="/" className="text-blue-600 hover:underline">Home</Link> &gt;{' '}
                <Link to={`/category/${product.category}`} className="text-blue-600 hover:underline">{product.category}</Link> &gt;{' '}
                <span>{product.name}</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="mb-2">
                        <img src={product.image} alt={product.name} className="w-full h-auto" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 max-h-72 overflow-y-auto">
                        {product.images?.map((img, index) => (
                            <div key={index}>
                                <img src={img} alt={`${product.name} ${index}`} className="w-full h-auto" />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-lg text-gray-600">${product.price}</p>

                    <div className="mt-4">
                        <h2 className="text-lg font-medium">Rating</h2>
                        <div className="flex items-center gap-4">
                            <div className="text-yellow-500">
                                {'⭐'.repeat(Math.round(product.rating || 5))}
                            </div>
                            <div className="text-sm text-black opacity-50">
                                ({product.reviews || '150 Reviews'})
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 border border-black opacity-50 transform rotate-90"></div>
                                <div className="text-sm text-[#00ff66] opacity-60">
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-h-36 overflow-y-auto mt-4">
                        <p>{product.description}</p>
                    </div>

                    <SizeSelection
                        sizes={product.sizes || []}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />

                    <div className="flex gap-2 mt-2">
                        <p className="mt-3 text-xm font-medium">Color:</p>
                        {['lightblue', 'darktan', 'grey'].map(color => (
                            <button
                                key={color}
                                className={`w-10 h-10 rounded-full border-2 border-gray-400 ${selectedColour === color ? 'ring-2 ring-blue-500' : ''
                                    }`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColour(color)}
                                aria-label={color}
                            >
                            </button>
                        ))}
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center gap-6">
                            <h2 className="text-lg font-medium">Price</h2>
                            <div className="flex items-center border border-gray-200 rounded">
                                <button
                                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                                    className="w-8 h-8 bg-gray-200 border-r border-gray-300 flex items-center justify-center text-xl font-bold text-gray-600 rounded-l"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min={1}
                                    className="w-16 h-8 text-center text-lg border-none outline-none appearance-none"
                                />
                                <button
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    className="w-8 h-8 bg-red-600 border-l border-gray-300 flex items-center justify-center text-xl font-bold text-white rounded-r"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Buy Now</button><br></br>

                    <button
                        onClick={toggleImageVisibility}
                        className="text-red-500 mt-4 mb-4 border-b-2 border-dashed border-red-500 ml-auto"
                    >
                        HD cách chọn size giày
                    </button>

                    {showImage && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="relative bg-white p-4 rounded shadow-lg">
                                <button
                                    onClick={toggleImageVisibility}
                                    className="absolute top-2 right-2 text-black text-2xl"
                                >
                                    &times;
                                </button>
                                <img
                                    src="https://giayxshop.vn/wp-content/uploads/2022/12/1-768x574.jpeg"
                                    alt="HD View"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    )}

                    <div className="mt-6 max-w-md border border-gray-300 rounded p-4">
                        <h2 className="text-lg font-medium">Free Delivery</h2>
                        <p className="text-sm">Enter your postal code for Delivery Availability</p>
                    </div>

                    <div className="mt-4 max-w-md border border-gray-300 rounded p-4">
                        <h2 className="text-lg font-medium">Save for Later</h2>
                        <p className="text-sm">Add this product to your wishlist to save for later.</p>
                    </div>
                    
                    <div className="mt-4 max-w-md border border-gray-300 rounded p-4">
                        <h2 className="text-lg font-medium">Save for Later</h2>
                        <p className="text-sm">Add this product to your wishlist to save for later.</p>
                    </div>
                </div>
            </div>

            {/* Phần đánh giá sản phẩm */}
            <div className="mt-8">
                <h2 className="text-xl font-bold">Đánh giá sản phẩm</h2>
                <form onSubmit={handleSubmit} className="mt-2">
                    <div>
                        <label className="block text-sm font-medium">Tên:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block text-sm font-medium">Nhận xét:</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded p-2"
                            rows={4}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Đánh giá:</label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className={`text-xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                >
                                    ⭐
                                </button>
                            ))}
                        </div>
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                        Gửi đánh giá
                    </button>
                </form>

                <div className="mt-8">
                    <h3 className="text-lg font-bold">Đánh giá từ khách hàng:</h3>
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index} className="border-b border-gray-300 py-2">
                                <div className="flex items-center">
                                    <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
                                    <span className="text-sm text-gray-500 ml-2">bởi {review.name}</span>
                                </div>
                                <p className="text-sm">{review.comment}</p>
                                <p className="text-xs text-gray-500">{review.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetail;
