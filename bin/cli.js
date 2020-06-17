#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-vue-starter project.
 * created by Lim Kyungmin, 06/17/2020
 *****************************************************************/

const path = require('path');
const starter = require('../lib/starter');
const destination = getDest(process.argv[2]);

function getDest(destFolder) {
  destFolder = destFolder || 'typescript-vue-starter';
  return path.join(process.cwd(), destFolder);
};

starter(destination);
