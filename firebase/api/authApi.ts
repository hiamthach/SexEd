import { auth } from '../store';
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  updatePassword,
  User,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { toast } from 'react-toastify';

export interface IAuthForm {
  email: string;
  password: string;
}

const authApi = {
  signIn: async ({ email, password }: IAuthForm) => {
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
  signUp: async ({ email, password }: IAuthForm) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Tạo tài khoản thành công');
        return userCredential;
      })
      .catch((error) => {
        toast.error(error.message);
        return error;
      });
  },
  signOut: async () => {
    return signOut(auth)
      .then(() => {
        toast.success('Đăng xuất thành công');
      })
      .catch((error) => {
        toast.error(error.message);
        return error;
      });
  },
  forgotPassword: async (email: string) => {
    await sendPasswordResetEmail(auth, email)
      .then((res) => {
        toast.success('Link đổi mật khẩu đã được gửi đến mail');
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
