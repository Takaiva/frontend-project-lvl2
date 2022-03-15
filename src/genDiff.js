import getDataOfDiff from './getDataOfDiff.js';
import parseJson from './dataParser.js';
import { readFile } from './fileReader.js';

const genDiff = (file1, file2) => {
  const data1 = parseJson(readFile(file1));
  const data2 = parseJson(readFile(file2));
  const data = getDataOfDiff(data1, data2);

  let result = data.reduce((acc, item) => {
    const key = item[0];
    const value = item[1];
    const status = item[2];
    if (status === 'hasOnlyFirstFile') {
      return `${acc}\n  - ${key}: ${value}`;
    }
    if (status === 'bothHaveTheSame') {
      return `${acc}\n    ${key}: ${value}`;
    }
    if (status === 'hasFirstFile') {
      return `${acc}\n  - ${key}: ${value}`;
    }
    if (status === 'hasSecondFile') {
      return `${acc}\n  + ${key}: ${value}`;
    }
    if (status === 'hasOnlySecondFile') {
      return `${acc}\n  + ${key}: ${value}`;
    }
    return acc;
  }, '');
  result = `{${result}\n}`;
  return result;
};

export default genDiff;
