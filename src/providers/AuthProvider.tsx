import React, { ReactNode, useEffect, useState, useContext } from 'react'
import { auth } from '../config/firebase'
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

export interface AuthProviderProps {
  children?: ReactNode
}

export interface AuthContextModel {
  auth: Auth
  user: User | null
  signIn: (email: string, password: string) => Promise<UserCredential>
  signUp: (email: string, password: string) => Promise<UserCredential>
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel,
)

export function useAuth(): AuthContextModel {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    //function that firebase notifies you if a user is set
    const unsubsrcibe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return unsubsrcibe
  }, [])

  const values = {
    signUp,
    user,
    signIn,
    auth,
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
