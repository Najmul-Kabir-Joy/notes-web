import { Api } from '@/services/request';

export const getNotes = async (email: string, search: string, sort: string) => {
  try {
    const res = await Api.get(
      `/user-notes?search=${search ? search : ''}&sort=${sort}&email=${email}`
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export const newNote = async (data: {
  title: string;
  note: string;
  tag: string;
  email: string;
}) => {
  try {
    const res = await Api.post(`/new`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const updateNote = async (
  data: { title: string; note: string; tag: string },
  id: string
) => {
  try {
    const res = await Api.put(`/update-note/${id}`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const deleteData = async (id: string) => {
  try {
    const res = await Api.delete(`/delete/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
