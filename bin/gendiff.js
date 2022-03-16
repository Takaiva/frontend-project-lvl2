#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/genDiff.js';

program
  .name('gendiff')
  .description('Compare two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const Format = program.opts().format;
    console.log(genDiff(filepath1, filepath2, Format));
  });

program.parse();
