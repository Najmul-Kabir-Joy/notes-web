import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
const NoteTitle = ({ title }: { title: string }) => {
  return (
    <p className="title font-[cursive] font-bold text-xl text-start p-2 pl-10">
      {_.truncate(title, {
        length: 37,
        omission: '...',
      })}
    </p>
  );
};

export default NoteTitle;
