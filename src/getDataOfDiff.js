import _ from 'lodash';

const getDataOfDiff = (file1, file2) => {
  const allKeys = _.union(Object.keys(file1), Object.keys(file2));
  const sortedAllKeys = _.sortBy(allKeys);
  const diff = sortedAllKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (value1 === value2) {
      return [key, value1, 'bothHaveTheSame'];
    }
    if (value1 !== value2 && value1 !== undefined && value2 !== undefined) {
      return (([key, value1, 'hasFirstFile']), ([key, value2, 'hasSecondFile']));
    }
    if (value1 !== value2 && value2 === undefined) {
      return [key, value1, 'hasOnlyFirstFile'];
    }
    if (value1 !== value2 && value1 === undefined) {
      return [key, value2, 'hasOnlySecondFile'];
    }
    return diff;
  });
};

export default getDataOfDiff;
