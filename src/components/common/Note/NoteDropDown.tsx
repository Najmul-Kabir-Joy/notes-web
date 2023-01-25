import React from 'react';

const NoteDropDown = ({ handleEdit }: { handleEdit: () => void }) => {
  const buttonStyle = 'text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-200';
  return (
    <div
      className="absolute right-0 z-10 mt-0 w-36 origin-top-right rounded-md bg-blue-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        <button className={buttonStyle} tabIndex={-1} onClick={handleEdit}>
          Edit
        </button>
        <button className={buttonStyle} tabIndex={-1}>
          History
        </button>
        <button className={buttonStyle} tabIndex={-1}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteDropDown;
