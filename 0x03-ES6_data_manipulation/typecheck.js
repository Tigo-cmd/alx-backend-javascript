// typecheck strings and number easily just git tired of writing it a lot and decided to do this

export  function TypeChecker(dataType = 'an error occured', data, message) {
  if (typeof data !== `${dataType}`) {
    throw new TypeError(message);
  }
}

export function print(args) {
  console.log(args);
}
