import PlusIcon from '@/assets/icons/PlusIcon';
import React, { useState } from 'react';
import NotesGenerator from './Note/NotesGenerator';
import NotePopup from './Note/Popup/NotePopup';
import SearchBar from './SearchBar';

const LoggedInEle = () => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <SearchBar />
      <NotesGenerator />
      <div
        onClick={() => setOpen(!open)}
        className="fixed z-20 bg-blue-400 hover:bg-blue-500 text-white bottom-32 right-10 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-300"
      >
        <PlusIcon />
      </div>
      <NotePopup isOpen={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
};

export default LoggedInEle;
