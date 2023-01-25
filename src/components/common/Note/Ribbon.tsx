import { tagColorSet } from '@/utills/utills';
import React, { useEffect, useRef } from 'react';
import styles from '../../../styles/note.module.css';

const Ribbon = ({ tagName }: { tagName: string }) => {
  const ribbonRef = useRef(null);
  const ribbonColor = (element: HTMLElement | null) => {
    if (element) {
      element.style.backgroundColor = tagColorSet[tagName].ribbon;
    }
  };
  useEffect(() => {
    if (ribbonRef) {
      ribbonColor(ribbonRef.current);
    }
  }, [ribbonRef]);
  return (
    <div className={styles.ribbon} ref={ribbonRef}>
      <span className="select-none pointer-events-none italic text-sm mb-2">{tagName}</span>
    </div>
  );
};

export default Ribbon;
