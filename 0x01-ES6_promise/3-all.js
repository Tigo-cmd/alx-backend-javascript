import { uploadPhoto, createUser } from './utils';
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((values) => {
    for (let item of values) {
      for (const [key, value] of Object.entries(item)) {
        console.log(value);
      }
    }
  }).catch(new Error('Signup system offline'));
}
