import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import stylish from '../__fixtures__/stylish.js';
import genDiff from '../src/genDiff.js';
import plain from '../__fixtures__/plain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yaml1 = getFixturePath('file1.yaml');
const yaml2 = getFixturePath('file2.yaml');

describe('check stylish output', () => {
  test('check resulted diff with json files', () => {
    const result = genDiff(json1, json2);
    expect(result).toBe(stylish);
  });
  test('check resulted diff with yaml files', () => {
    const result = genDiff(yaml1, yaml2);
    expect(result).toBe(stylish);
  });
});

describe('check plain output', () => {
  test('check resulted diff with json files', () => {
    const result = genDiff(json1, json2, 'plain');
    expect(result).toBe(plain);
  });
  test('check resulted diff with yaml files', () => {
    const result = genDiff(yaml1, yaml2, 'plain');
    expect(result).toBe(plain);
  });
});
