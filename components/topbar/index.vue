<template>
<div class="bg-white text-white w-full h-[80px] p-4 flex top-bar">
    <div class="flex justify-between items-center top-bar-body">
        <div class="flex justify-between items-center top-bar-left">
            <div class="flex items-center aside-button">
                <UButton @click="$emit('toggle-sidebar')">
                    <Icon name="hugeicons:list-view" size="18px" />
                </UButton>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

const props = defineProps({
  isSidebarOpen: Boolean, // Receive the sidebar state as a prop
});
</script>


<style>
.top-bar {
    z-index: 1000;
}
.top-bar-left button {
    background-color: var(--plcolor-accent);
    cursor: pointer;
    transition: all 0.5s;
}
.top-bar-left button:hover {
    border: 1px solid var(--plcolor-accent);
    background-color: #ffffff;
    color: var(--plcolor-accent);
}
</style>