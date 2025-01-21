<template>
<div class="bg-black text-white w-full h-[80px] p-4 flex top-bar">
    <div class=" flex justify-between items-center top-bar-body">
        <div class="flex justify-between items-center top-bar-left">
            <div class="flex items-center aside-button">
                <Button @click="$emit('toggle-sidebar')">
                    <Icon name="hugeicons:list-view" size="18px" />
                </Button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

const props = defineProps({
  isSidebarOpen: Boolean, // Receive the sidebar state as a prop
});
console.log(props.isSidebarOpen)

</script>