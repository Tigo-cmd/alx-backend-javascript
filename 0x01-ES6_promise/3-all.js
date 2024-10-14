import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const item1 = values[0];
    const item2 = values[1];
    console.log(item1.body, item2.firstName, item2.lastName);
  }).catch(console.log('Signup system offline'));
}
