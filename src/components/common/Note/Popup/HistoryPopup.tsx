import moment from 'moment';
import React from 'react';
import Modal, { Styles } from 'react-modal';
import HistoryCard from '../../HistoryCard';
import CloseButton from './CloseButton';

const customStyles: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '50',
  },
  content: {
    height: '80%',
    width: '20%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    backgroundColor: '#FFFFF',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
    zIndex: '50',
  },
};
interface CompProps {
  isOpen: boolean;
  onClose: () => void;
  data: Date[];
  creationTime: Date;
}

Modal.setAppElement('#__next');
const HistoryPopup = ({ isOpen, onClose, data, creationTime }: CompProps) => {
  const dataLen = data.length;
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <CloseButton onClose={onClose} />
      {!dataLen ? (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-gray-500 uppercase">No previous history</p>
        </div>
      ) : (
        <div className="mt-7">
          {data.map((item, index) => (
            <HistoryCard key={index} timeStamp={item as unknown as string} />
          ))}
        </div>
      )}
      <div className="px-2 bg-gray-50 mb-2 hover:bg-gray-100 cursor-pointer">
        <p className="text-sm">Created the note on</p>
        <time className="italic">{moment(creationTime).format('MM/DD/YYYY h:mm A')}</time>
      </div>
    </Modal>
  );
};

export default HistoryPopup;
