<template>
  <div class="chat-container">
    <div class="chat-container-left">
      <div class="chat-users-wrapper">
        <div class="chat-users-header">
          <div class="chat-users-search">
            <uiSearch></uiSearch>
          </div>
        </div>
        
        <div class="chat-users-groups">
          <UCard :ui="{header: {padding: 'py-2'}}">
            <template #header>
              <div class="flex items-center justify-between">
                <p class=" text-[30px] font-[Roboto]">
                  <b>
                    Groups
                  </b>
                </p>
                <UButton 
                icon="material-symbols:add-circle" 
                color="violet"
                size="xl"
                variant="soft"
                @click="toggleCreateGroup"
                :ui="{ rounded: 'rounded-full'}">
                </UButton>
              </div>
            </template>

            <UTabs :items="groupList.value" orientation="vertical" class=" justify-start">
              <template #default="{ item, index }">
                <div @click="setGroupList(item)" class=" text-left">{{ index + 1 }}. {{ item.name }}</div>
              </template>
            </UTabs>
          </UCard>
        </div>
      </div>
    </div>

    <div class="chat-container-right">
      <MessageContainer />
    </div>
    
    <CreateGroup v-model="isOpen"></CreateGroup>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useChatGroup } from '~/composables/useGroup';



const { getGroupsList } = useChatGroup()
const { setSelectedChat, groupList } = useChatStore()

// const groupList = []


const isOpen = ref(false)

onMounted(async () => {
 getGroupsList()
});

const setGroupList = (val)=> {
  setSelectedChat({type:'GROUP', ...val})
}

function toggleCreateGroup() {
  isOpen.value = !isOpen.value
}


</script>





<style scoped>
.chat-container {
  display: flex;
  height: 100%;
  /* background-color: #EFF6FC; */
  padding: 1rem;
  gap: 1rem;
}

.chat-container-left {
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 100%;
}

.chat-container-right {
  width: 100%;
  max-height: 100%;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 1rem;
}

.message {
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background-color: #f1f1f1;
  width: fit-content;
}

.self {
  align-self: flex-end;
  background-color: #dcf8c6;
}

.input-container {
  display: flex;
  gap: 0.5rem;
}

.chat-users-wrapper {
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 34px;
}
</style>