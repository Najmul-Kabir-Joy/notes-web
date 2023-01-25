import React from 'react';
import UserInfo from './UserInfo';

const Avatar = ({ name, imgLink }: { name: string; imgLink: string }) => {
  return (
    <div className="bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center border-2 border-green-400 hover:border-green-500 cursor-pointer group">
      <div className="text-white font-bold text-xl overflow-hidden">
        {imgLink ? (
          <img
            src={imgLink}
            height="100%"
            width="100%"
            className="overflow-hidden rounded-full"
            alt="user-img"
          />
        ) : (
          <p>{name.slice(0, 1)}</p>
        )}
      </div>
      <UserInfo name={name} />
    </div>
  );
};

export default Avatar;
