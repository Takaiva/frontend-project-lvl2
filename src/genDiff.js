import getDataOfDiff from './getDataOfDiff.js';
import parseData from './parsers.js';
import { readFile, getExt } from './fileReader.js';

const genDiff = (file1, file2) => {
  const fileData1 = readFile(file1);
  const fileData2 = readFile(file2);
  const ext1 = getExt(file1);
  const ext2 = getExt(file2);
  const data1 = parseData(fileData1, ext1);
  const data2 = parseData(fileData2, ext2);
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
