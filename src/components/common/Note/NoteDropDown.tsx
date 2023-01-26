import { deleteData } from '@/apicalls/apicall';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { ToastMessage } from '../Toaster/Toastify';

const NoteDropDown = ({
  handleEdit,
  id,
  handleHistoryOpen,
}: {
  handleEdit: () => void;
  id: string;
  handleHistoryOpen: () => void;
}) => {
  const buttonStyle = 'text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-200';
  const queryClient = useQueryClient();

  const deleteMutaion = useMutation(
    async (deleteID: string) => {
      return deleteData(deleteID);
    },
    {
      onError: (error) => {
        ToastMessage('error', error as string);
      },
      onSuccess: (data) => {
        if (data.data) {
          ToastMessage('success', 'DELETED');
          queryClient.invalidateQueries();
        } else {
          ToastMessage('error', 'AN ERROR OCCURED');
          queryClient.invalidateQueries();
        }
      },
    }
  );

  const handleDelete = async () => {
    await deleteMutaion.mutateAsync(id);
  };
  return (
    <div
      className="absolute right-0 z-10 mt-0 w-36 origin-top-right rounded-md bg-blue-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        <button className={buttonStyle} tabIndex={-1} onClick={handleEdit}>
          Edit
        </button>
        <button className={buttonStyle} tabIndex={-1} onClick={handleHistoryOpen}>
          History
        </button>
        <button className={buttonStyle} tabIndex={-1} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteDropDown;
