#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .description('Compare two configuration files and shows a difference.')
  .version('0.0.1');

program.parse();
