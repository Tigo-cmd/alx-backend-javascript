// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
  const name = input.trim(); // Remove extra spaces and newlines
  process.stdout.write(`Your name is: ${name}`);
  process.stdout.write('This important software is now closing\n');
  process.stdin.end();
});

process.stdin.on('end', () => {
  process.exit(0);
});
