import { TagColorSet, TagOptions } from '@/types/types';

export const tagOptions: TagOptions = ['Casual', 'Urgent', 'ToDo', 'Ongoing'];

export const tagColorSet: TagColorSet = {
  casual: {
    note: 'yellow',
    ribbon: 'amber',
  },
  urgent: {
    note: 'red',
    ribbon: 'rose',
  },
  todo: {
    note: 'purple',
    ribbon: 'violet',
  },
  ongoing: {
    note: 'emerald',
    ribbon: 'green',
  },
};
