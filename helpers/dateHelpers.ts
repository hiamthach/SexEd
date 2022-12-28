import dayjs from 'dayjs';

const dateHelper = {
  format: (date: Date) => dayjs(date).format('MMM DD, YYYY'),
};

export default dateHelper;
