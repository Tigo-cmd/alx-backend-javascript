// 1-stdin.js
console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

// Listen for user input
process.stdin.on('data', (input) => {
  const name = input.trim(); // Remove trailing newlines or spaces
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.stdin.end(); // End the input stream
});

// Handle process end event
process.stdin.on('end', () => {
  process.exit(0);
});
