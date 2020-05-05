import { formatDistanceToNowStrict } from 'date-fns';

export const timeAgo = (time) =>
  formatDistanceToNowStrict(time, {
    addSuffix: 'ago',
  });
