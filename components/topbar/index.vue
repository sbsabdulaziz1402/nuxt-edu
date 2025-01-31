<template>
<div class="bg-white text-white w-full h-[80px] p-4 flex top-bar">
    <div class="flex justify-between items-center top-bar-body">
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
</script>


<style>
.top-bar {
    z-index: 1000;
}
.top-bar-left button {
    background-color: #6D35E3;
    cursor: pointer;
    transition: all 0.5s;
}
.top-bar-left button:hover {
    border: 1px solid #6D35E3;
    background-color: #ffffff;
    color: #6D35E3;
}
</style>