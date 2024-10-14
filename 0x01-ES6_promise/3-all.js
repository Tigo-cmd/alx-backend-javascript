import { uploadPhoto, createUser } from './utils';
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto, createUser]).then((values) => {
    console.log(values);
  }).catch(new Error('Signup system offline'));
}
