import React from 'react';
import moment from 'moment';
const NoteFooter = ({ lastModTime }: { lastModTime: Date }) => {
  const timeAgo = moment(lastModTime).fromNow();

  return (
    <div className="w-full mt-3 absolute bottom-2 flex justify-between items-center">
      <p className="text-sm text-gray-200 opacity-50 hover:underline underline-offset-2">
        Last modiefied: {timeAgo}
      </p>
    </div>
  );
};

export default NoteFooter;
