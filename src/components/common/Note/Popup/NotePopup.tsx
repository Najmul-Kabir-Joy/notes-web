/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useState } from 'react';
import Modal, { Styles } from 'react-modal';
import MyEditor from '../Editor/MyEditor';
import CloseButton from './CloseButton';
import NoteSelect from './NoteSelect';
import PopupFooter from './PopupFooter';
import Title from './Title';
import TitleInput from './TitleInput';

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
    width: '80%',
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
Modal.setAppElement('#__next');
const NotePopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [inputs, setInputs] = useState({
    title: '',
    note: '',
    tag: '',
  });
  const editorRef = useRef({});
  const log = () => {
    if (editorRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <CloseButton onClose={onClose} />
      <div className="w-full p-10">
        <TitleInput inputs={inputs} setInputs={setInputs} required={true} />
        <div className="mt-5">
          <Title text="Select a tag" />
          <NoteSelect />
        </div>
        <div className="mt-5 w-full">
          <Title text="Your note" />
          <MyEditor editorRef={editorRef} />
        </div>
      </div>
      <PopupFooter log={log} onClose={onClose} />
    </Modal>
  );
};

export default NotePopup;
