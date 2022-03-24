import getStylish from './stylish.js';

const getFormatted = (data, format) => {
  if (format === 'stylish') {
    return getStylish(data, format);
  }
  return false;
};

export default getFormatted;
