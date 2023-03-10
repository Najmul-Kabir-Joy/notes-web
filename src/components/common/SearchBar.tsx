import SearchIcon from '@/assets/icons/SearchIcon';
import React from 'react';
import SearchField from './SearchField';
import Sorter from './Sorter';

const SearchBar = ({
  setSearchKey,
  setSortKey,
}: {
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
  setSortKey: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="w-full px-4 py-2 flex justify-center items-center">
      <div className="relative mt-1 rounded-md shadow-sm lg:w-1/3 sm:w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <SearchIcon />
          </span>
        </div>
        <SearchField setSearchKey={setSearchKey} />
        <Sorter setSortKey={setSortKey} />
      </div>
    </div>
  );
};

export default SearchBar;
