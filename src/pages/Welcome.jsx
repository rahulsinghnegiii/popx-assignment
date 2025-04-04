import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to PopX</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <Link 
            to="/signup" 
            className="block w-full py-3 text-center text-white font-medium bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Create Account
          </Link>
          
          <Link 
            to="/login" 
            className="block w-full py-3 text-center text-gray-600 font-medium bg-purple-100 rounded-md hover:bg-purple-200"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome; 