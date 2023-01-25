import React from 'react';

const NoteFooter = () => {
  return (
    <div className="w-full mt-3 absolute bottom-2 flex justify-between items-center">
      <p className="text-sm text-gray-200 opacity-50 hover:underline underline-offset-2">
        Last modiefied: 5 hours ago
      </p>
    </div>
  );
};

export default NoteFooter;
