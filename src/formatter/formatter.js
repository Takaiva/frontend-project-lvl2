import getStylish from './stylish.js';

const getFormatted = (data, format = 'stylish') => {
  if (format === 'stylish') {
    return getStylish(data);
  }
  throw new Error('Falsy format');
};

export default getFormatted;
