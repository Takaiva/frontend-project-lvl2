import path from 'path';
import { readFileSync } from 'fs';

const getPath = (file) => path.resolve('..', '__fixtures__', file);
const getExt = (file) => path.extname(file).slice(1);
const readFile = (file) => readFileSync(file, 'utf-8');

export { getPath, getExt, readFile };
