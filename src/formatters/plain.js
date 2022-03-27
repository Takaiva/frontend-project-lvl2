import _ from 'lodash';

const toString = (item) => {
  const actualItem = typeof item === 'string' ? `'${item}'` : item;
  return actualItem;
};

const genPlain = (data) => {
  const iter = (obj, route) => {
    const result = obj.reduce((acc, item) => {
      const actualKey = item.key;
      const actualValue = item.value;
      const actualStatus = item.status;
      const actualRoute = [`${route}`, `${actualKey}`].join('.');
      switch (actualStatus) {
        case 'nested':
          return `${acc}${iter(actualValue, actualRoute)}\n`;

        case 'changed': {
          if (_.isPlainObject(actualValue[0])) {
            return `${acc}Property '${actualRoute.replace(actualRoute[0], '')}' was updated. From [complex value] to ${toString(actualValue[1])}\n`;
          }
          if (_.isPlainObject(actualValue[1])) {
            return `${acc}Property '${actualRoute.replace(actualRoute[0], '')}' was updated. From ${toString(actualValue[0])} to [complex value]\n`;
          }
          return `${acc}Property '${actualRoute.replace(actualRoute[0], '')}' was updated. From ${toString(actualValue[0])} to ${toString(actualValue[1])}\n`;
        }

        case 'hasOnlyFirstFile':
          return `${acc}Property '${actualRoute.replace(actualRoute[0], '')}' was removed\n`;

        case 'hasOnlySecondFile': {
          if (_.isPlainObject(actualValue)) {
            return `${acc}Property '${actualRoute.replace(actualRoute[0], '')}' was added with value: [complex value]\n`;
          }
          return `${acc}Property '${actualRoute.replace(actualRoute[0], '')}' was added with value: ${toString(actualValue)}\n`;
        }

        default:
          return acc;
      }
    }, '');
    return result.replace(/\n$/, '');
  };
  return iter(data, '');
};

export default genPlain;
