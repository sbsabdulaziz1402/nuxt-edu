<template>
        <div class="h-[100vh] w-full">
            <div class="flex h-full">
                <div class="sidebar-wrapper bg-white px-4 py-[16px] h-full w-[15%]" :class="{close: !isSidebarOpen}">
                    <SideBar :is-sidebar-open="isSidebarOpen"/>
                </div>
                <div class="w-[85%]" :class="{'w-[95%]': !isSidebarOpen}">
                    <Topbar :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
                    <main>
                        <slot/>
                    </main>
                </div>
            </div>
        </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';

const isSidebarOpen = ref(true);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

</script>

<style scoped>
.sidebar-wrapper{
    transition: all 0.5s;
}
.close {
    /* background: #fff; */
    width: 5%;
    transition: all 0.5s;
}
</style>