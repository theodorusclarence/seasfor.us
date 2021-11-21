import { format } from 'date-fns';

export const formatDateCardEvents = (date: Date) => {
  return { date: format(date, 'MMMM d, yyyy'), time: format(date, 'h:mm a') };
};

export const formatMinDateEvents = (date: Date) => {
  return format(date, 'MMM d');
};
