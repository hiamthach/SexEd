import React, { useState, useContext, useLayoutEffect } from 'react';

import authApi from '../firebase/api/authApi';
import { auth } from '../firebase/store';
import { IAuthForm } from '../firebase/api/authApi';
import { User } from 'firebase/auth';
import { useRouter } from 'next/router';

interface IAuthValue {
  isAuth: boolean;
  signIn(values: IAuthForm): Promise<unknown>;
  signUp(values: IAuthForm): Promise<unknown>;
  signOut(): Promise<void>;
  changePassword(newPassword: string): Promise<void>;
  currentUser: User | null;
}

const authContext = React.createContext<IAuthValue>({
  isAuth: false,
  signIn: async (values: IAuthForm) => {},
  signUp: async (values: IAuthForm) => {},
  signOut: async () => {},
  changePassword: async (newPassword: string) => {},
  currentUser: null,
});

function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setIsAuth(true);
      } else {
        setIsAuth(false);
        setCurrentUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const values: IAuthValue = {
    isAuth,
    async signIn(values: IAuthForm) {
      try {
        await authApi.signIn(values);
        setIsAuth(true);
      } catch (err) {
        return err;
      }
    },
    async signUp(values: IAuthForm) {
      try {
        const res = await authApi.signUp(values);
        if (res?.user) {
          router.push('/auth/signin');
        }
      } catch (err) {
        return err;
      }
    },
    async signOut() {
      setIsAuth(false);
      authApi.signOut();
    },
    async changePassword(newPassword: string) {
      if (currentUser) {
        authApi.changePassword(currentUser, newPassword);
      }
    },
    currentUser,
  };

  return values;
}

interface IAuthProvider {
  children: JSX.Element | JSX.Element[];
}

export function AuthProvider({ children }: IAuthProvider) {
  const auth: IAuthValue = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}
