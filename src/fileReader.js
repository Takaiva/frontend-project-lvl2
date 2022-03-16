import path from 'path';
import { readFileSync } from 'fs';

const getPath = (file) => path.resolve(__dirname, '..', '__fixtures__', file);
const getExt = (file) => path.extname(file);
const readFile = (file) => readFileSync(file, 'utf-8');

export { getPath, getExt, readFile };
