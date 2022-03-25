import _ from 'lodash';

const getDataOfDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.sortBy(_.union(keys1, keys2));
  const result = allKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if ((_.isObject(value1)) && (_.isObject(value2))) {
      return { key, status: 'nested', value: getDataOfDiff(value1, value2) };
    }
    if (value1 === value2) {
      return { key, status: 'bothHaveTheSame', value: value1 };
    }
    if (value1 !== value2 && value1 !== undefined && value2 !== undefined) {
      return { key, status: 'changed', value: [value1, value2] };
    }
    if (value1 !== value2 && value2 === undefined) {
      return { key, status: 'hasOnlyFirstFile', value: value1 };
    }
    if (value1 !== value2 && value1 === undefined) {
      return { key, status: 'hasOnlySecondFile', value: value2 };
    }
    return null;
  });
  return result;
};

export default getDataOfDiff;
