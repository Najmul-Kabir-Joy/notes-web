import React from 'react';

const RoundedSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="rounded-full bg-slate-200 h-10 w-10"></div>
    </div>
  );
};

export default RoundedSkeleton;
