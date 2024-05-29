import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let arrRes = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    arrRes = { photo, user };
  } catch (caughtErr) {
    arrRes = { photo: null, user: null };
  }
  return arrRes;
}
export default asyncUploadUser;
