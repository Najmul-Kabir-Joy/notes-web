import React from 'react';

const UserInfo = ({ name }: { name: string }) => {
  return (
    <div className="z-10 absolute -bottom-14 right-5 px-4 py-2 hidden bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:block transition-all duration-700">
      <p className="text-xs text-gray-300">
        Logged in as: <br /> <span className="text-sm mt-2 text-gray-400 font-bold">{name}</span>
      </p>
      <p
        className="text-gray-400 hover:underline  text-center  text-sm hover:text-red-400 hover:font-bold transition-all duration-300"
        onClick={() => (window.location.href = '/api/auth/logout')}
      >
        Log out
      </p>
    </div>
  );
};

export default UserInfo;
