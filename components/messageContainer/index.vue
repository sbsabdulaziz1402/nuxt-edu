<template>
    <div class="chat-messages-container">
        <UCard class="h-full">
          <template #header>
            <div class="chat-messages-header">
                <div>
                    <UAvatar size="lg" src="https://api.bank-kredit.uz/uploads/files/ff808181a9dcdb48ad248856" />
                </div>
                <div class="chat-messages-title">
                    <!-- {{ props?.chatSetting?.value ? props.chatSetting.value.name : '' }}  -->
                </div>
            </div>
          </template>

          <div class="chat-messages-wrapper" id="chat-messages">
            <div class="chat-messages-body">
                <div v-for=" (item, inx) in messages.value" class="item" :key="inx">
                    {{ item.message }}
                </div>
            </div>
          </div>

          <div>
            <UForm :state="state" class="space-y-4" @submit="onSubmitMessage">
                <UFormGroup  name="message">
                    <UInput icon="solar:paperclip-linear" 
                            v-model="state.message"
                            placeholder="Type your message here..." 
                            type="text"/>
                </UFormGroup>
            </UForm>
          </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
const groupChat = useChatGroup();

const {messages} = useChatStore();

// const messagesList = ref([])

const state = reactive({
  message: undefined
})


watch(
    ()=>messages.value,
    (newVal, oldVal)=>{
        console.log('watch', newVal)
        var block = document.getElementById("chat-messages");
        block.scrollTop = block.scrollHeight;
    },
    {deep: true}
)

const onSubmitMessage = (val: any)=> {
    groupChat.sendGroupMessage(val.data.message);
    state.message = undefined
}

onMounted(async ()=> {
    // messagesList.value = chatStore.messages.value
})




</script>




 

<style scoped>
.chat-messages-container {
    max-height: 100%;
    height: 800px;
}

.chat-messages-header{
    display: flex;
    gap: 10px;
}

.chat-messages-title{
    font-size: 32px;
    font-weight: bold;
}

.chat-messages-wrapper {
    display: flex;
    justify-content: end;
    position: relative;
}

.chat-messages-body {
    overflow: auto;
    width: 100%;
    display: flex;
    height: 600px;
    /* justify-content: flex-end; */
    gap: 30px;
    margin: 20px 0px;
    flex-direction: column;
    scrollbar-width: none;
    scroll-snap-type: y mandatory;
}


.item {
  scroll-snap-align: start;
} 

 .chat-messages-body {
  scroll-behavior: smooth;
} 

 .chat-messages-body > :last-child {
  margin-top: auto;
}
</style>