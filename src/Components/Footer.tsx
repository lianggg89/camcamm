import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-black text-white">
            {/* Footer Content */}
            <div className="max-w-[1170px] mx-auto py-16 px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
                {/* Section 1 */}
                <div className="col-span-2">
                    <h2 className="text-2xl font-bold">Exclusive</h2>
                    <p className="mt-4 text-gray-400">
                        Subscribe and get 10% off your first order.
                    </p>
                    <div className="mt-4 flex items-center border border-white rounded pl-1 pr-1 py-1 w-64">
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent text-white placeholder-gray-400 outline-none text-xs flex-grow"
                        />
                        <button className="bg-white text-black px-2 py-1 text-xs rounded">
                            Subscribe
                        </button>
                    </div>
                    
                </div>

                {/* Section 2 */}
                <div>
                    <h3 className="text-xl font-semibold">Support</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li>111 Bijoy sarani, Dhaka, Bangladesh</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div>
                    <h3 className="text-xl font-semibold">Account</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div>
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Download App Section */}
                {/* <div>
                    <h3 className="text-xl font-semibold">Download App</h3>
                    <p className="mt-2 text-gray-400">
                        Save $3 with App New User Only
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                        <img
                            src="https://media.istockphoto.com/id/1095468748/vi/vec-to/m%C3%A3-qr-m%E1%BA%ABu-m%C3%A3-v%E1%BA%A1ch-hi%E1%BB%87n-%C4%91%E1%BA%A1i-vector-tr%E1%BB%ABu-t%C6%B0%E1%BB%A3ng-%C4%91%E1%BB%83-qu%C3%A9t-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-th%C3%B4ng-minh-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn.jpg?s=612x612&w=0&k=20&c=nCjpoa8qW4lREJGqVCQZsWcrKGOcKKuy5RSsSVzqlL8="
                            alt="QR Code"
                            className="w-20 h-20"
                        />
                        <div className="space-y-2">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                className="w-36"
                            />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVtlVNJuAY0M6d2HZaN9kymzWr2iIVm7cJA&s"
                                alt="App Store"
                                className="w-36"
                            />
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 py-4 border-t border-white/20">
                <FaFacebookF size={24} className="cursor-pointer hover:text-blue-500" />
                <FaInstagram size={24} className="cursor-pointer hover:text-pink-500" />
                <FaTwitter size={24} className="cursor-pointer hover:text-blue-400" />
                <FaYoutube size={24} className="cursor-pointer hover:text-red-500" />
            </div>

            {/* Copyright */}
            <div className="text-center py-4 opacity-60 text-gray-400">
                Copyright Rimel 2022. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
