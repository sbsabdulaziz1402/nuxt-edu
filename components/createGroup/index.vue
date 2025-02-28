<template>
    <USlideover>
      <div>
        <UCard>
            <template #header>
                Create Group 
            </template>
            <UForm :state="groupState" class="space-y-4" @submit="onSubmit">
              <UFormGroup label="name" name="name">
                <UInput v-model="groupState.name" />
              </UFormGroup>
          
              <UFormGroup label="Members" name="members">
                <USelectMenu
                  v-model="groupState.members"
                  by="id"
                  name="labels"
                  :options="users"
                  option-attribute="name"
                  multiple
                  searchable
                  creatable
                >
                    <template #label>
                        Members
                    </template>
                    <template #option="{ option }">
                        <span class="truncate">{{ option.label }}</span>
                    </template>
                </USelectMenu>
              </UFormGroup>
          
              <UButton type="submit">
                Submit
              </UButton>
            </UForm>

        </UCard>
      </div>
    </USlideover>
</template>

<script setup lang="ts">
import { useChatGroup } from '@/composables/useGroup'


const { createGroup } = useChatGroup()

const users = [{
    label: 'sbsabdulaziz1401',
    id: 'kaN8hmLEKNa2N0saZ68aA7cavBz1'
  },{
    label: 'sbsabdulaziz1402',
    id: 'bMpJyvVvB4dG7GWz5aMQX87xgx32'
  },{
    label: 'test',
    id: 'FEu5J5eC2EMK1nbSvvPKL4hVUL92'
  }
];

const members = ref(users[0])

const groupState = reactive({
    name: undefined,
    members: undefined
})

async function onSubmit(event: {name: string, members: []}) {
  // console.log(event.data.name, event.data)
  createGroup(event.data.name, event.data.members)
}

</script>