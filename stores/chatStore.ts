import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useChatGroup } from '~/composables/useGroup';
import type { MessageType } from '~/types/message'

export const useChatStore = defineStore('chatStore',()=>{
    const { listenForGroupMessages } = useChatGroup();
    const selectedChat = ref<any>(null)
    const messages = ref([]);
    const groupList = ref([])

    const runListenChat = (newChat:any) => {
        if(newChat) {
            if(newChat.type == 'GROUP') {
                listenForGroupMessages(newChat.name);
            } else if(newChat.type == 'DIALOG') {
                // messages.value = []
            }
        }
    }

    function setSelectedChat(chat: any) {
        selectedChat.value = chat;
        runListenChat(chat);
    }

    return {setSelectedChat, groupList, messages, selectedChat}
})