const package = require('./package.json');

function makeRelative(absolutePaths, delimiter) {
  return absolutePaths.map((path) => path.split(delimiter)[1]);
}

function removePathFromCommand(command, path) {
  return command.replace(path, '');
}

function logCommand(label, command, files) {
  const COLORS = {
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    resetter: '\x1b[0m',
  };

  console.log(
    `${COLORS.yellow + label}: ${COLORS.cyan + command} ${
      COLORS.green + files
    }${COLORS.resetter}`
  );
}

function spellcheck(relativePaths) {
  const BLACK_LIST = ['package.json', 'tsconfig.json', 'yarn.lock'];

  const filesToCheck = relativePaths
    .filter((file) => !file.startsWith('.') && !BLACK_LIST.includes(file))
    .join(' ');

  const command = filesToCheck
    ? package.scripts.spellcheck
    : 'echo "No files to check"';

  logCommand('SPELLCHECK', command, filesToCheck);
  return `${command} ${filesToCheck}`;
}

function format(relativePaths) {
  const filesToFormat = relativePaths.join(' ');
  const command = filesToFormat
    ? `${removePathFromCommand(package.scripts.format, '. ')} --ignore-unknown`
    : 'echo "No files to format"';

  logCommand('FORMAT', command, filesToFormat);
  return `${command} ${filesToFormat}`;
}

function lint(relativePaths) {
  const filesToLint = relativePaths.join(' ');
  const command = filesToLint
    ? removePathFromCommand(package.scripts.lint, 'src ')
    : 'echo "No files to lint"';

  logCommand('LINT', command, filesToLint);
  return `${command} ${filesToLint}`;
}

function test(relativePaths) {
  const TESTS_ROOT_FOLDER = '<rootDir>/src/**';

  const testMatches = makeRelative(
    package.jest.testMatch,
    TESTS_ROOT_FOLDER
  ).map((match) => new RegExp(match));

  const filesToTest = relativePaths
    .filter((file) => {
      for (let i = 0; i < testMatches.length; i += 1) {
        if (testMatches[i].test(file)) {
          return true;
        }
      }

      return false;
    })
    .join(' ');

  const command = filesToTest
    ? package.scripts.test
    : 'echo "No files to test"';

  logCommand('TEST', command, filesToTest);
  return `${command} ${filesToTest}`;
}

module.exports = {
  '*': (relativePaths) => [spellcheck(relativePaths), format(relativePaths)],
  '*.{ts,tsx}': (relativePaths) => [lint(relativePaths), test(relativePaths)],
};
