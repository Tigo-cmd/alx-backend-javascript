// typecheck strings and number easily just git tired of writing it a lot and decided to do this

export default function TypeChecker(dataType = 'an error occured', data, message) {
  if (typeof data !== `${dataType}`) {
    throw new TypeError(message);
  }
}
