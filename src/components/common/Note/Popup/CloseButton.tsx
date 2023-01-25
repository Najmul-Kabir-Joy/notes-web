import CloseIcon from '@/assets/icons/CloseIcon';
import React from 'react';

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <button onClick={onClose} className="absolute top-2 right-2">
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
