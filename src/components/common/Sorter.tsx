import { tagOptions } from '@/utills/utills';
import React from 'react';

const Sorter = ({ setSortKey }: { setSortKey: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center">
      <select
        id="sort"
        name="sort"
        className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        onChange={(e) => setSortKey(e.target.value)}
      >
        <option value="all">ALL</option>
        {tagOptions.map((opt: string, index: number) => (
          <option key={index} value={opt.toLowerCase()}>
            {opt.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorter;
