import React, { useState, useEffect, useRef } from 'react';

import Ribbon from './Ribbon';
import NoteTitle from './NoteTitle';
import NoteBody from './NoteBody';
import NotePopup from './Popup/NotePopup';
import NoteFooter from './NoteFooter';
import ElipsisIcon from '@/assets/icons/ElipsisIcon';
import NoteDropDown from './NoteDropDown';
import { tagColorSet } from '@/utills/utills';
import { NotesData } from '@/types/types';
import HistoryPopup from './Popup/HistoryPopup';

interface AppProps {
  item: NotesData;
}

const Note = ({ item }: AppProps) => {
  const { _id: id, tag, note, title, updatedAt } = item;

  const [open, setOpen] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  const noteRef = useRef(null);

  useEffect(() => {
    const randomRotate = (element: HTMLElement | null) => {
      if (element) {
        const rotation = (Math.random() - 0.5) * 20;
        element.style.transform = `rotate(${rotation}deg)`;
        element.style.backgroundColor = tagColorSet[tag].note;
      }
    };
    if (noteRef) {
      randomRotate(noteRef.current);
    }
  }, [noteRef, tag]);

  return (
    <>
      <div
        ref={noteRef}
        className={`w-[300px] h-[300px] relative px-2 rounded-xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 cursor-pointer group`}
        onMouseLeave={() => setShowDrop(false)}
      >
        <NoteTitle title={title} />
        <span
          className="absolute top-5 right-0 hidden group-hover:block"
          onClick={() => setShowDrop(!showDrop)}
        >
          <ElipsisIcon />
          {showDrop && (
            <NoteDropDown
              handleEdit={() => setOpen(!open)}
              id={id}
              handleHistoryOpen={() => setOpenHistory(!openHistory)}
            />
          )}
        </span>
        <Ribbon tagName={tag} />
        <NoteBody note={note} />
        <NoteFooter lastModTime={updatedAt} />
      </div>
      <NotePopup
        isOpen={open}
        onClose={() => setOpen(false)}
        type="update"
        item={{ title: item.title, tag: item.tag, note: item.note }}
        id={item._id}
      />
      <HistoryPopup
        isOpen={openHistory}
        onClose={() => setOpenHistory(!openHistory)}
        data={item.editHistory}
      />
    </>
  );
};

export default Note;
