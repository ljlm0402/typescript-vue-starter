/*****************************************************************
 * Create new typescript-react-starter project.
 * created by Lim Kyungmin, 02/12/2020
 *****************************************************************/

const path = require('path');
const editJsonFile = require('edit-json-file');
const { exec } = require('child_process');
const ncp = require('ncp').ncp;
const ora = require('ora');
const chalk = require('chalk');
const { promisify } = require('util');
const asyncExec = promisify(exec);
const npm = require('./dependencies');

async function createProject(projectName) {
  let spinner;

  try {
    console.log('[ 1 / 3 ] 🔍  copying project...');
    console.log('[ 2 / 3 ] 🚚  fetching dependencies...');

    await copyProjectFiles(projectName);
    await updatePackageJson(projectName);
    const dependencies = await getDependencies();

    console.log('[ 3 / 3 ] 🔗  linking dependencies...');
    console.log('\u001b[2m──────────────\u001b[22m');

    spinner = ora('Install modules...\n');
    spinner.start();

    await installDependencies(projectName, dependencies, spinner);

    spinner.succeed(chalk`{green Complete setup project}`);
  } catch (error) {
    spinner.fail(chalk`{red Please leave this error as an issue}`);
    console.error(error);
  }
}

function copyProjectFiles(destination) {
  const prjFolder = './default';
  const source = path.join(__dirname, prjFolder);

  return new Promise((resolve, reject) => {
    ncp.limit = 16;
    ncp(source, destination, function(err) {
      if (err) reject(err);
      resolve();
    });
  });
}

async function updatePackageJson(destination) {
  const file = editJsonFile(destination + '/package.json', { autosave: true });
  
  file.set('name', path.basename(destination));
}

async function getDependencies() {

  return npm;
}

async function installDependencies(destination, { save, dev }, spinner) {
  const options = { cwd: destination };

  spinner.text = 'Install dependencies...';
  await asyncExec('npm i -s ' + save, options);
  
  spinner.text = 'Install devDependencies...';
  await asyncExec('npm i -D ' + dev, options);
}

module.exports = createProject;
