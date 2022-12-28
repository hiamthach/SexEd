import { doc, setDoc } from 'firebase/firestore';

import { db } from '../store';

const userApi = {
  addUser: (id: string, data: any) => {
    return setDoc(doc(db, 'user', id), data);
  },
};

export default userApi;
