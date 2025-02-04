import { ref, set, get, push } from 'firebase/database';
import { onValue } from 'firebase/database';
import { ref as VueRef } from 'vue';
export const useChat = () => {
    const { $realbase } = useNuxtApp(); 
    const messages = VueRef([]);
    const getChatRoomId = (user1: string, user2: string) => {
        return user1 < user2 ? `${user1}_${user2}` : `${user2}_${user1}`;
    };
    
    const createChatRoom = async (user1: string, user2: string) => {
        const chatRoomId = getChatRoomId(user1, user2);
        const chatRoomRef = ref($realbase, `chat_rooms/${chatRoomId}`);
        
        const snapshot = await get(chatRoomRef);
        if (!snapshot.exists()) {
            await set(chatRoomRef, {
              users: [user1, user2],
              created_at: Date.now(),
              messages: {}
            });
        }
        return chatRoomId;
    }

    const sendMessage = async (sender: string, getter: string, message: string) => {
        const chatRoomId = getChatRoomId(sender, getter);
        const messagesRef = ref($realbase, `chat_rooms/${chatRoomId}/messages`);
        
        const newMessageRef = push(messagesRef);
        await set(newMessageRef, {
            sender,
            getter,
            message,
            time: Date.now()
        });
    }

    const listenForMessages = (user1: string, user2: string) => {
        const chatRoomId = getChatRoomId(user1, user2);
        const messagesRef = ref($realbase, `chat_rooms/${chatRoomId}/messages`);
    
        onValue(messagesRef, (snapshot) => {
            if (snapshot.exists()) {
              messages.value = Object.values(snapshot.val());
            } else {
              messages.value = [];
            }
        });
    }
    return { createChatRoom, getChatRoomId };
}
