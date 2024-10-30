import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="h-[21px] flex items-center gap-3 mb-8">
        <div className="text-black text-sm font-normal opacity-50 leading-[21px]">Home</div>
        <div className="w-[13.19px] h-0 border border-black/50 rotate-[117.05deg]"></div>
        <div className="text-black text-sm font-normal leading-[21px]">404 Error</div>
      </div>

      {/* Main Content */}
      <div className="text-black text-[110px] font-medium leading-[115px] tracking-[3.30px] mb-8">
        404 Not Found
      </div>

      {/* Back to home page Button */}
      <div className="h-14 px-12 py-4 bg-red-600 rounded flex items-center justify-center gap-3">
        <div className="text-white text-base font-medium leading-normal">
          Back to home page
        </div>
      </div>
    </div>
  );
};

export default NotFound;
