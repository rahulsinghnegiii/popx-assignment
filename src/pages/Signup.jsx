import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    navigate('/account-settings');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 pt-16 bg-white">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">Create your</h1>
          <h2 className="text-2xl font-bold text-gray-800">PopX account</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="fullName" className="text-sm text-purple-600 font-medium">
              Full Name*
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="phoneNumber" className="text-sm text-purple-600 font-medium">
              Phone number*
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-purple-600 font-medium">
              Email address*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm text-purple-600 font-medium">
              Password *
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="companyName" className="text-sm text-purple-600 font-medium">
              Company name
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="pt-2">
            <p className="text-sm text-purple-600 font-medium mb-2">Are you an Agency?*</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-8 text-white font-medium bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup; 