import PlusIcon from '@/assets/icons/PlusIcon';
import NotesGenerator from '@/components/common/Note/NotesGenerator';
import NotePopup from '@/components/common/Note/Popup/NotePopup';
import SearchBar from '@/components/common/SearchBar';
import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-2 mt-16 w-full min-h-[calc(100vh-140px)] bg-blue-50">
        <SearchBar />
        <NotesGenerator />
        <div
          onClick={() => setOpen(!open)}
          className="fixed z-20 bg-blue-400 hover:bg-blue-500 text-white bottom-32 right-10 w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition-colors duration-300"
        >
          <PlusIcon />
        </div>
        <NotePopup isOpen={open} onClose={() => setOpen(false)} />
      </main>
    </React.Fragment>
  );
}
