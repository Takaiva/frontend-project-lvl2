import path from 'path';
import { readFileSync } from 'fs';

const getExt = (file) => path.extname(file).slice(1);
const readFile = (file) => readFileSync(file, 'utf-8');

export { getExt, readFile };
