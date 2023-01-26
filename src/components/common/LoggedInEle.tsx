import PlusIcon from '@/assets/icons/PlusIcon';
import { UserProfile } from '@auth0/nextjs-auth0/client';
import React, { useState } from 'react';
import NotePopup from './Note/Popup/NotePopup';
import SearchBar from './SearchBar';
import { useQuery } from 'react-query';
import { getNotes } from '@/apicalls/apicall';
import CardSkeleton from '../loaders/skeletons/CardSkeleton';
import Note from './Note/Note';
import { NotesData } from '@/types/types';
import { emptyNoteInput } from '@/utills/utills';

const LoggedInEle = ({ user }: { user: UserProfile }) => {
  const [open, setOpen] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [sortKey, setSortKey] = useState('all');
  const { isLoading, data } = useQuery(
    [`notes of ${user.email} ${searchKey} ${sortKey}`],
    () => getNotes(user.email as string, searchKey, sortKey),
    {
      enabled: user.email ? true : false,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <React.Fragment>
      <SearchBar setSearchKey={setSearchKey} setSortKey={setSortKey} />
      <section className="mt-2 px-8 py-4 grid grid-cols-5 gap-x-10 gap-y-20 pb-28">
        {isLoading
          ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
            Array.from({ length: 5 }).map((_, index: number) => <CardSkeleton key={index} />)
          : data.data.map((item: NotesData, index: number) => <Note key={index} item={item} />)}
      </section>
      <div
        onClick={() => setOpen(!open)}
        className="fixed z-20 bg-blue-400 hover:bg-blue-500 text-white bottom-32 right-10 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-300"
      >
        <PlusIcon />
      </div>
      <NotePopup isOpen={open} onClose={() => setOpen(false)} type="insert" item={emptyNoteInput} />
    </React.Fragment>
  );
};

export default LoggedInEle;
