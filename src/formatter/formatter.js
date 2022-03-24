import getStylish from './stylish.js';

const getFormatted = (data, format) => {
  if (format === 'stylish') {
    return getStylish(data, format);
  }
  throw new Error('Falsy format');
};

export default getFormatted;
