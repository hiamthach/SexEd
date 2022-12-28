import React, { useState, useContext, useLayoutEffect } from 'react';

import authApi from '../firebase/api/authApi';
import { auth } from '../firebase/store';
import { ISignIn } from '../firebase/api/authApi';
import { User } from 'firebase/auth';

interface IAuthValue {
  isAuth: boolean;
  signIn(values: ISignIn): Promise<unknown>;
  signOut(): Promise<void>;
  changePassword(newPassword: string): Promise<void>;
  currentUser: User | null;
}

const authContext = React.createContext<IAuthValue>({
  isAuth: false,
  signIn: async (values: ISignIn) => {},
  signOut: async () => {},
  changePassword: async (newPassword: string) => {},
  currentUser: null,
});

function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

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
    async signIn(values: ISignIn) {
      try {
        await authApi.signIn(values);
        setIsAuth(true);
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
