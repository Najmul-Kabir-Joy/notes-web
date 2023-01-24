import React from 'react';
import UserInfo from './UserInfo';

const Avatar = ({ name }: { name: string }) => {
  return (
    <div className="bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center border-2 border-green-400 hover:border-green-500 cursor-pointer group">
      <div className="text-white font-bold text-xl">{name.slice(0, 1)}</div>
      <UserInfo name={name} />
    </div>
  );
};

export default Avatar;
