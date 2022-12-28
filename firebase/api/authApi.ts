import { auth } from '../store';
import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail, setPersistence, browserLocalPersistence, updatePassword, User } from 'firebase/auth';
import { toast } from 'react-toastify';

export interface ISignIn {
  email: string;
  password: string;
}

const authApi = {
  signIn: async ({ email, password }: ISignIn) => {
    try {
      const res = await setPersistence(auth, browserLocalPersistence).then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      });
      if (res.operationType === 'signIn') toast.success('Đăng nhập thành công');
      return res;
    } catch (error: any) {
      toast.error(error.message);
      return error;
    }
  },
  signOut: async () => {
    try {
      signOut(auth).then(() => {
        toast.success('Đăng xuất thành công');
      });
    } catch (error: any) {
      toast.error(error.message);
      return error;
    }
  },
  forgotPassword: async (email: string) => {
    await sendPasswordResetEmail(auth, email)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        toast.error(error.message);
        return error;
      });
  },
  changePassword: async (user: User, newPassword: string) => {
    await updatePassword(user, newPassword)
      .then(() => {
        toast.success('Mật khẩu đã được cập nhật');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  },
};

export default authApi;
