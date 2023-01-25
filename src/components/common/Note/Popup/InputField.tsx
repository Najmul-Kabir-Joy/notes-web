import React from 'react';
import { TitleInputType } from './TitleInput';

const InputField = ({ inputs, setInputs, required }: TitleInputType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, title: event.target.value });
  };
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="block w-full rounded-md border-gray-300 px-2 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      placeholder="Please enter a title"
      onChange={handleChange}
      value={inputs.title}
      required={required}
    />
  );
};

export default InputField;
