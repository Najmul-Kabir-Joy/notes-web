import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import DOMPurify from 'isomorphic-dompurify';
const NoteBody = ({ note }: { note: string }) => {
  const [showNote, setShowNote] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const clean = DOMPurify.sanitize(note);
      const truncatedNote = _.truncate(clean, {
        length: 235,
        omission: '...',
      });
      setShowNote(truncatedNote);
    }
  }, [note]);

  return <div className="mt-7" dangerouslySetInnerHTML={{ __html: showNote }} />;
};

export default NoteBody;
