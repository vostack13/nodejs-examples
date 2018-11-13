const ygr = require('yargs');

const argv = ygr
  .usage('01-example.js [options]')
  .help('h')
  .alias('h', 'help')
  .version('v', 'version', '0.0.1')
  .alias('v', 'version')
  .demand('s')
  .nargs('s', 1)
  .describe(
    's', 'You phrase'
  ).alias('s', 'say')
  .argv;

  const word = argv.s;

  console.log('You say: ', word);
  
