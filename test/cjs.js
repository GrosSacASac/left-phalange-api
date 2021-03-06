import { testRunner } from './helpers/test-runner.js';

const data = {left: `phalange`};

const testObject = {
  type: `cjs`,
  filename: `data.js`,
  data,
  string: `module.exports = {left:'phalange'};`,
  prettyString: `module.exports = {
  left: 'phalange',
};`,
  malformed: `left: [phalange`,
  skip: {
    parse: true,
  },
};

testRunner(testObject);
