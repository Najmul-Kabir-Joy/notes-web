import { TagColorSet, TagOptions } from '@/types/types';

export const tagOptions: TagOptions = ['Casual', 'Urgent', 'ToDo', 'Ongoing'];

export const tagColorSet: TagColorSet = {
  casual: {
    note: '#facc15',
    ribbon: '#fbbf24',
  },
  urgent: {
    note: '#f87171',
    ribbon: '#fb7185',
  },
  todo: {
    note: '#c084fc',
    ribbon: '#a78bfa',
  },
  ongoing: {
    note: '#34d399',
    ribbon: '#4ade80',
  },
};
