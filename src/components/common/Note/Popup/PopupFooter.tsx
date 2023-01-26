import React from 'react';

const PopupFooter = ({
  submitHandler,
  onClose,
}: {
  submitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
}) => {
  return (
    <footer className="fixed bottom-4 right-8 flex gap-x-3">
      <button
        onClick={onClose}
        className="bg-gray-300 hover:bg-gray-400 px-6 py-2 uppercase rounded-full text-white transition-colors duration-300"
      >
        cancel
      </button>
      <button
        onClick={(e) => submitHandler(e)}
        type={'submit'}
        className="bg-blue-300 hover:bg-blue-400 px-6 py-2 uppercase rounded-full text-white transition-colors duration-300"
      >
        save
      </button>
    </footer>
  );
};

export default PopupFooter;
