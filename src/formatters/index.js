import genStylish from './stylish.js';
import genPlain from './plain.js';

const getFormatted = (data, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return genStylish(data);
    case 'plain':
      return genPlain(data);
    default:
      throw new Error('Falsy format');
  }
};

export default getFormatted;
