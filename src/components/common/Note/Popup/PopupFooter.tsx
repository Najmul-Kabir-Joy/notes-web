import React from 'react';

const PopupFooter = ({
  submitHandler,
  onClose,
}: {
  submitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
}) => {
  return (
    <footer className="flex justify-end gap-x-3 h-[40px] mt-5">
      <div>
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 px-6 py-2 uppercase rounded-full text-white transition-colors duration-300"
        >
          cancel
        </button>
      </div>
      <div>
        <button
          onClick={(e) => submitHandler(e)}
          type={'submit'}
          className="bg-blue-300 hover:bg-blue-400 px-6 py-2 uppercase rounded-full text-white transition-colors duration-300"
        >
          save
        </button>
      </div>
    </footer>
  );
};

export default PopupFooter;
