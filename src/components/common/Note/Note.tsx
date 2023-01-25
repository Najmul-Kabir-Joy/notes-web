import React, { useState, useEffect, useRef } from 'react';

import Ribbon from './Ribbon';
import NoteTitle from './NoteTitle';
import NoteBody from './NoteBody';
import NotePopup from './Popup/NotePopup';
import NoteFooter from './NoteFooter';
import ElipsisIcon from '@/assets/icons/ElipsisIcon';
import NoteDropDown from './NoteDropDown';
import { NoteInterface } from '@/types/types';
import { tagColorSet } from '@/utills/utills';
const Note = ({ data }: NoteInterface) => {
  const { title, tag, note } = data;
  const [open, setOpen] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  const noteRef = useRef(null);
  const randomRotate = (element: HTMLElement | null) => {
    if (element) {
      const rotation = (Math.random() - 0.5) * 20;
      element.style.transform = `rotate(${rotation}deg)`;
    }
  };

  useEffect(() => {
    if (noteRef) {
      randomRotate(noteRef.current);
    }
  }, [noteRef]);

  const getColors = () => {
    return tagColorSet[tag];
  };

  const { ribbon: ribbonColor, note: noteColor } = getColors();
  return (
    <>
      <div
        ref={noteRef}
        className={`w-[300px] h-[300px] relative px-2 bg-${noteColor}-400 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer group`}
        onMouseLeave={() => setShowDrop(false)}
      >
        <NoteTitle title={title} />
        <span
          className="absolute top-5 right-0 hidden group-hover:block"
          onClick={() => setShowDrop(!showDrop)}
        >
          <ElipsisIcon />
          {showDrop && <NoteDropDown handleEdit={() => setOpen(!open)} />}
        </span>
        <Ribbon tagName={tag} color={ribbonColor} />
        <NoteBody note={note} />
        <NoteFooter />
      </div>
      <NotePopup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Note;
