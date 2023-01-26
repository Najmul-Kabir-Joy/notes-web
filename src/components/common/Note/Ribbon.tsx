import React from 'react';
import styles from '../../../styles/note.module.css';

const Ribbon = ({
  tagName,
  ribbonRef,
}: {
  tagName: string;
  ribbonRef: React.MutableRefObject<null>;
}) => {
  return (
    <div className={styles.ribbon} ref={ribbonRef}>
      <span className="select-none pointer-events-none italic text-sm mb-2">{tagName}</span>
    </div>
  );
};

export default Ribbon;
