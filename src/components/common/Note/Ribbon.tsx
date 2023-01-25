import React from 'react';
import styles from '../../../styles/note.module.css';

const Ribbon = ({ tagName, color }: { tagName: string; color: string }) => {
  return (
    <div className={`${styles.ribbon} bg-${color}-400`}>
      <span className="select-none pointer-events-none italic text-sm mb-2">{tagName}</span>
    </div>
  );
};

export default Ribbon;
