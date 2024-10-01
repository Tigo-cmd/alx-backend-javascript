export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Block-scoped constant
    const task2 = false; // Block-scoped constant
  }

  return [task, task2];
}
