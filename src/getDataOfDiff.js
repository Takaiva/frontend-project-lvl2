import _ from 'lodash';

const indexOfNestedArr = (coll) => {
  const result = coll
    .map((item) => {
      if (item.length !== 2) {
        return undefined;
      }
      return coll.indexOf(item);
    })
    .filter((item) => item !== undefined);
  return result[0];
};

const normalizeData = (coll) => {
  const result = coll
    .reduce((acc, item) => {
      if (coll.indexOf(item) === indexOfNestedArr(coll)) {
        const file1Data = item[0];
        const file2Data = item[1];
        acc.push(file1Data);
        acc.push(file2Data);
      }
      acc.push(item);
      return acc;
    }, [])
    .filter((item) => item.length > 2);
  return result;
};

const getDataOfDiff = (file1, file2) => {
  const allKeys = _.union(Object.keys(file1), Object.keys(file2));
  const sortedAllKeys = _.sortBy(allKeys);
  const diffData = sortedAllKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (value1 === value2) {
      return [key, value1, 'bothHaveTheSame'];
    }
    if (value1 !== value2 && value1 !== undefined && value2 !== undefined) {
      return [
        [key, value1, 'hasFirstFile'],
        [key, value2, 'hasSecondFile'],
      ];
    }
    if (value1 !== value2 && value2 === undefined) {
      return [key, value1, 'hasOnlyFirstFile'];
    }
    if (value1 !== value2 && value1 === undefined) {
      return [key, value2, 'hasOnlySecondFile'];
    }
    return diffData;
  });
  return normalizeData(diffData);
};

export default getDataOfDiff;
