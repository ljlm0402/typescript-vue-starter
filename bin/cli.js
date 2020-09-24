#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-vue-starter project.
 * Created by Lim Kyungmin, 03/03/2020
 *****************************************************************/

const path = require('path');
const starter = require('../lib/starter');
const destination = getDest(process.argv[2]);

function getDest(destFolder) {
  destFolder = destFolder || 'typescript-vue-starter';
  return path.join(process.cwd(), destFolder);
};

starter(destination);
