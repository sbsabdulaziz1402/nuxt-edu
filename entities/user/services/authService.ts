import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useUserStore } from "../model/store";

export const useAuthService = () => {
  const { $auth } = useNuxtApp();
  const userStore = useUserStore();

  const signUp = async (email: string, password: string, name?: string) => {
    const userCredential = await createUserWithEmailAndPassword($auth, email, password);

    // Optionally update the user's display name
    if (name) {
      await updateProfile(userCredential.user, { displayName: name });
    }

    // Update the user store
    userStore.setUser({
      id: userCredential.user.uid,
      name: name || "",
      email: userCredential.user.email || "",
    });
  };

  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword($auth, email, password);
    userStore.setUser({
      id: userCredential.user.uid,
      email: userCredential.user.email || "",
      name: userCredential.user.displayName || "",
    });
  };


  const logout = async () => {
    await signOut($auth);
    userStore.setUser(null);
  };

  return { signUp, logout, login };
};
