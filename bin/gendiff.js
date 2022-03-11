#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .description('Compare two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>');

program.parse();
