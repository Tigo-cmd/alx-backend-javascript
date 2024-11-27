// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question('Welcome to Holberton School, what is your name?\n', (name) => {
//   console.log(`Your name is: ${name}`);
//   readline.close();
// });

/*
*
* i decided to use a new approach to this regarding ALX requirements
*/

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdout.write('This important software is now closing');
