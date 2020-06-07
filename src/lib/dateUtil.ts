import * as moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

const today = moment().format(dateFormat);

const formatDate = (date: Date): string => {
  return moment(date).format(dateFormat);
}

export default {
  today,
  formatDate,
}
