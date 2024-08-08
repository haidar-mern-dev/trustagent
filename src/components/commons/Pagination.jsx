// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-0 mt-4">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`py-2 px-4 ${currentPage === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-700 border border-gray-300'} rounded-l-md`}
            >
                Prev
            </button>
            <div className="py-2 px-4 bg-gray-800 text-white">
                {currentPage}
            </div>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`py-2 px-4 ${currentPage === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-700 border border-gray-300'} rounded-r-md`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
