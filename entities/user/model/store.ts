import { ref } from "vue";
import type { User } from "./types";

const currentUser = ref<User | null>(null);

export const useUserStore = () => {
  const setUser = (user: User | null) => {
    currentUser.value = user;
  };

  const getUser = () => currentUser.value;

  return { currentUser, setUser, getUser };
};