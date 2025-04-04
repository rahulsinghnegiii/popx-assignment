import React from 'react';

const AccountSettings = () => {
  
  const user = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <header className="bg-white p-4 shadow">
        <h1 className="text-xl font-bold text-gray-800">Account Settings</h1>
      </header>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
                <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">+</span>
                </div>
              </div>
              
              <div className="ml-4">
                <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 text-sm">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
              Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings; 
