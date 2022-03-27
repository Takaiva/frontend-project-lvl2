import getDataOfDiff from './getDataOfDiff.js';
import parseData from './parsers.js';
import { readFile, getExt } from './fileReader.js';
import getFormatted from './formatters/index.js';

const genDiff = (file1, file2, format = 'stylish') => {
  const fileData1 = readFile(file1);
  const fileData2 = readFile(file2);
  const ext1 = getExt(file1);
  const ext2 = getExt(file2);
  const data1 = parseData(fileData1, ext1);
  const data2 = parseData(fileData2, ext2);
  const data = getDataOfDiff(data1, data2);
  return getFormatted(data, format);
};

export default genDiff;
