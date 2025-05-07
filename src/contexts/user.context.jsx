import { createContext, use, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUserAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
    if(!user){
        await signOutUserAuth();
        setCurrentUser(null);
    }else{
        createUserDocumentFromAuth(user);
        setCurrentUser(user);
    }
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
