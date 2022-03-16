import getDataOfDiff from './getDataOfDiff.js';
import parseJson from './dataParser.js';
import { readFile } from './fileReader.js';

const genDiff = (file1, file2, format = 'json') => {
  const fileData1 = readFile(file1);
  const fileData2 = readFile(file2);
  const data1 = format === 'json' ? parseJson(fileData1) : false;
  const data2 = format === 'json' ? parseJson(fileData2) : false;
  const data = getDataOfDiff(data1, data2);
  const result = data.reduce((acc, item) => {
    const key = item[0];
    const value = item[1];
    const status = item[2];
    switch (status) {
      case 'hasOnlyFirstFile':
        return `${acc}\n  - ${key}: ${value}`;
      case 'bothHaveTheSame':
        return `${acc}\n    ${key}: ${value}`;
      case 'hasFirstFile':
        return `${acc}\n  - ${key}: ${value}`;
      case 'hasSecondFile':
        return `${acc}\n  + ${key}: ${value}`;
      case 'hasOnlySecondFile':
        return `${acc}\n  + ${key}: ${value}`;
      default:
        return acc;
    }
  }, '');
  return `{${result}\n}`;
};

export default genDiff;
