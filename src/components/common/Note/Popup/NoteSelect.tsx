import { tagOptions } from '@/utills/utills';
import React from 'react';
import { TitleInputType } from './TitleInput';

const NoteSelect = ({ inputs, setInputs }: TitleInputType) => {
  return (
    <div className="relative rounded-md shadow-sm w-full">
      <select
        required
        onChange={(e) => setInputs({ ...inputs, tag: e.target.value })}
        defaultValue={inputs.tag}
        className="form-select w-full py-2 px-3 pr-9 rounded-md bg-white border border-gray-300 placeholder-gray-500 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
      >
        {tagOptions.map((opt: string, index: number) => (
          <option key={index} value={opt.toLowerCase()}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NoteSelect;
