import React from "react";

const UnderConstruction = () => {
  return (
    <div className="bg-white min-h-[76vh] flex items-center justify-center overflow-y-auto">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Website is Under Construction
        </h1>
        <p className="text-lg text-gray-600 mb-8">Coming Soon</p>
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
