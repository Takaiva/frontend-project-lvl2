import _ from 'lodash';

const getObjectData = (obj, depth) => {
  const entries = Object.entries(obj);
  const result = entries.reduce((acc, [key, value]) => {
    const space = '    ';
    if (_.isPlainObject(value)) {
      return `${acc}\n${space.repeat(depth)}${key}: {${getObjectData(value, depth + 1)}${space.repeat(depth)}}`;
    }
    return `${acc}\n${space.repeat(depth)}${key}: ${value}`;
  }, '');
  return `${result}\n`;
};

const genStylish = (data) => {
  const iter = (obj, depth) => {
    const space = '    ';
    const spaceWhenRemoved = `${space.repeat(depth).slice(0, -2)}- `;
    const spaceWhenAdded = `${space.repeat(depth).slice(0, -2)}+ `;
    const actualSpace = `${space.repeat(depth)}`;
    const result = obj.reduce((acc, item) => {
      const actualKey = item.key;
      const actualValue = item.value;
      const actualStatus = item.status;
      switch (actualStatus) {
        case 'hasOnlyFirstFile': {
          const value = _.isPlainObject(actualValue) ? `{${getObjectData(actualValue, depth + 1)}${actualSpace}}` : `${actualValue}`;
          return `${acc}\n${spaceWhenRemoved}${actualKey}: ${value}`;
        }
        case 'changed': {
          const valueBefore = _.isPlainObject(actualValue[0]) ? `{${getObjectData(actualValue[0], depth + 1)}${actualSpace}}` : `${actualValue[0]}`;
          const valueAfter = _.isPlainObject(actualValue[1]) ? `{${getObjectData(actualValue[1], depth + 1)}${actualSpace}}` : `${actualValue[1]}`;
          return `${acc}\n${spaceWhenRemoved}${actualKey}: ${valueBefore}\n${spaceWhenAdded}${actualKey}: ${valueAfter}`;
        }
        case 'hasOnlySecondFile': {
          const value = _.isPlainObject(actualValue) ? `{${getObjectData(actualValue, depth + 1)}${actualSpace}}` : `${actualValue}`;
          return `${acc}\n${spaceWhenAdded}${actualKey}: ${value}`;
        }
        case 'nested':
          return `${acc}\n${actualSpace}${actualKey}: {${iter(actualValue, depth + 1)}\n${space.repeat(depth)}}`;
        default:
          return `${acc}\n${actualSpace}${actualKey}: ${actualValue}`;
      }
    }, '');
    return `${result}`;
  };
  return `{${iter(data, 1)}\n}`;
};

export default genStylish;
