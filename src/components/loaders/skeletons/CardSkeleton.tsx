import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-slate-300 w-[300px] h-[300px] px-2 rounded-xl shadow-xl"></div>
    </div>
  );
};

export default CardSkeleton;
