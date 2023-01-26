import React from 'react';

const SearchField = ({
  setSearchKey,
}: {
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="block w-full rounded-md border-gray-300 pl-8 pr-16 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      placeholder="Search for titles"
      onChange={(e) => setSearchKey(e.target.value)}
    />
  );
};

export default SearchField;
