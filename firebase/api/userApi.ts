import { doc, setDoc } from 'firebase/firestore';

import { updateProfile, User } from 'firebase/auth';

import { db, auth } from '../store';

export interface IUserProfile {
  displayName?: string;
  photoURL?: string;
  phoneNumber?: string;
}

const userApi = {
  addUser: (id: string, data: any) => {
    return setDoc(doc(db, 'user', id), data);
  },
  updateUserProfile: async (user: User | null, data: IUserProfile) => {
    if (user) {
      return updateProfile(user, data)
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch((error) => {
          return error;
        });
    }
  },
};

export default userApi;
