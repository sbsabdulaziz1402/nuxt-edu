import { ref, set, get, push } from 'firebase/database';
import { onValue } from 'firebase/database';
import { ref as VueRef } from 'vue';
import { any } from 'zod';
import { useUserStore } from '~/entities/user/model/store';

export const useChatGroup = () => {
    const { $realbase } = useNuxtApp(); 
    const messages = VueRef([]);
    const chatStore = useChatStore();
    const userStore = useUserStore();
    const createGroup = async (name:string, users: [string]) => {
        const groupRef = ref($realbase, `groups/${name}`);
        const snapshot = await get(groupRef)
        if(!snapshot.exists()){
            await set(groupRef, {
                members: users,
                name: name,
                created_at: Date.now()
            })
        }
    }
    
    const getGroupsList = async () => {
        const groupref = ref( $realbase, `groups`);
        onValue(groupref, (snapshot) => {
            if(snapshot.exists()) {
                chatStore.groupList.value = Object.values(snapshot.val());
                // chatStore.setSelectedChat({type:'GROUP', ...Object.values(snapshot.val())[0]});
            } else {
                chatStore.groupList.value = []
            }
        })
    }

    const sendGroupMessage = async ( message: string)=> {
        const groupName = chatStore.selectedChat.name;
        const sender = userStore.currentUser.value.uid;
        const groupRef = `groups/${groupName}`;
        const messageRef = ref($realbase, `groups/${groupName}/messages`);

        const newMessageRef = push(messageRef);
        await set(newMessageRef, {
            sender,
            message,
            time: Date.now()
        });
    }

    const listenForGroupMessages = (groupName: string) => {
        const messagesRef = ref($realbase, `groups/${groupName}/messages`);
        onValue(messagesRef, (snapshot) => {
            if (snapshot.exists()) {
                chatStore.messages.value = Object.values(snapshot.val());
            } else {
                chatStore.messages.value = []
            }
        });
    }
    
    return { createGroup, sendGroupMessage, listenForGroupMessages, getGroupsList}
    
}