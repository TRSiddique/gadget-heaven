import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-50 px-4">
      <div className="text-center">
        <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-purple-700 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">Oops! The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
