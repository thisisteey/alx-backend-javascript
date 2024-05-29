import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((arrRes) => {
      console.log(`${arrRes[0].body} ${arrRes[1].firstName} ${arrRes[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
export default handleProfileSignup;
