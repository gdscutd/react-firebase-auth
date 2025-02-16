import { firebaseAuth } from "@/lib/config";
import { User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

const valuesFallback = {
  user: undefined as User | undefined,
  setUser: (user: User | undefined) => {},
  loading: true,
};

export const UseAuth = createContext(valuesFallback);

export const AuthContext = ({ children }: any) => {
  const auth = firebaseAuth;
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });
  }, []);

  const values = {
    user: user,
    setUser: setUser,
    loading: loading,
  };

  return <UseAuth.Provider value={values}>{children}</UseAuth.Provider>;
};
