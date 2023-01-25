import { CardData } from '@/utills/data';
import React from 'react';
import Note from './Note';

const NotesGenerator = () => {
  const data = CardData;
  return (
    <section className="w-full h-full mt-2 px-8 py-4 grid grid-cols-5 gap-x-10 gap-y-20 pb-32">
      {data.map((item, index) => (
        <Note key={index} data={item} />
      ))}
    </section>
  );
};

export default NotesGenerator;
