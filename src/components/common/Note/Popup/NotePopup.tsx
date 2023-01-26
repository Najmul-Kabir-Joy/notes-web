import { newNote, updateNote } from '@/apicalls/apicall';
import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useRef, useState } from 'react';
import Modal, { Styles } from 'react-modal';
import { useMutation, useQueryClient } from 'react-query';
import { ToastMessage } from '../../Toaster/Toastify';
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
    width: '80%',
    height: '80%',
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

interface Item {
  title: string;
  tag: string;
  note: string;
}
interface CompProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'insert' | 'update';
  item: Item;
  id?: string;
}
Modal.setAppElement('#__next');
const NotePopup = ({ isOpen, onClose, type, item, id }: CompProps) => {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState(item);
  const editorRef = useRef({});

  const mutation = useMutation(
    async (data: { title: string; note: string; tag: string; email: string }) => {
      if (type === 'insert') {
        return newNote(data);
      }
      if (type === 'update') {
        return updateNote(data, id as string);
      }
    },
    {
      onSuccess: (data) => {
        if (type === 'insert') {
          if (data.result._id) {
            ToastMessage('success', 'ADDED');
            onClose();
            queryClient.invalidateQueries();
          }
        }
        if (type === 'update') {
          if (data.data.modifiedCount) {
            ToastMessage('success', 'UPDATED');
            onClose();
            queryClient.invalidateQueries();
          }
        }
      },
      onError: (error) => {
        ToastMessage('error', error as string);
      },
    }
  );

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataToSend = { ...inputs, email: user?.email as string };
    mutation.mutateAsync(dataToSend);
    e.preventDefault();
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="h-10">
        <p className="text-center text-xl uppercase font-bold font-[cursive]">
          {type === 'insert' ? 'New Note' : 'Edit Note'}
        </p>
        <CloseButton onClose={onClose} />
      </div>
      <div className="h-[62vh] overflow-y-scroll">
        <form className="w-full md:p-10 p-0">
          <TitleInput inputs={inputs} setInputs={setInputs} required={true} />
          <div className="mt-5">
            <Title text="Select a tag" />
            <NoteSelect inputs={inputs} setInputs={setInputs} />
          </div>
          <div className="mt-5 w-full">
            <Title text="Your note" />
            <MyEditor editorRef={editorRef} inputs={inputs} setInputs={setInputs} />
          </div>
        </form>
      </div>
      <PopupFooter submitHandler={handleSubmit} onClose={onClose} />
    </Modal>
  );
};

export default NotePopup;
