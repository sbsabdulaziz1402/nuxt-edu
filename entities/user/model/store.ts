import { ref, onMounted } from "vue";
import type { User } from "./types";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useUserStore = () => {
  const auth = getAuth();
  const currentUser = ref<any>(null);

  const setUser = (user: User | null) => {
    currentUser.value = user;
  };

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          currentUser.value = user; // Get the current user's UID
        } else {
          currentUser.value = null; // User is not logged in
        }
    });
  });


  const getUser = () => currentUser.value;

  return { currentUser, setUser, getUser };
};