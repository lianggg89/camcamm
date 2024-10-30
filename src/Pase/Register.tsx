import React from 'react';
import 'tailwindcss/tailwind.css';

const Register: React.FC = () => {
    return (
        <div className="h-[781px] flex justify-center items-center">
            <div className="w-[805px] h-[781px] relative bg-[#cbe4e8] rounded-tr rounded-br">
                <img className="w-full h-full object-cover" src="https://cafebiz.cafebizcdn.vn/2019/1/9/photo-4-1547004128936131073009.jpg" alt="Register Image" />
            </div>
            <div className="flex flex-col justify-center items-start gap-10 ml-10">
                <div className="flex flex-col justify-start items-start gap-6">
                 <div className="text-black text-4xl font-medium font-inter leading-[30px] tracking-wider">Register to Exclusive</div>
                    <div className="text-black text-base font-normal font-poppins leading-normal">Enter your details below</div>
                </div>
                <div className="flex flex-col justify-start items-start gap-6">
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="opacity-40 text-black text-base font-normal font-poppins leading-normal" htmlFor="emailOrPhone">username Phone Number</label>
                        <input type="text" id="emailOrPhone" className="w-[370px] h-[40px] border-b border-black opacity-50 focus:outline-none" />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="opacity-40 text-black text-base font-normal font-poppins leading-normal" htmlFor="emailOrPhone">Email or Phone Number</label>
                        <input type="text" id="emailOrPhone" className="w-[370px] h-[40px] border-b border-black opacity-50 focus:outline-none" />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <label className="opacity-40 text-black text-base font-normal font-poppins leading-normal" htmlFor="password">Password</label>
                        <input type="password" id="password" className="w-[370px] h-[40px] border-b border-black opacity-50 focus:outline-none" />
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="px-12 py-4 bg-[#db4444] rounded justify-center items-center">
                        <button className="text-[#f9f9f9] text-base font-medium font-poppins leading-normal">Log In</button>
                    </div>
                    <div className="text-[#db4444] text-base font-normal font-poppins leading-normal cursor-pointer">Forget Password?</div>
                </div>
            </div>
        </div>
    );
}

export default Register;
