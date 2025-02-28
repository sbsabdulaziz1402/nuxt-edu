<template>
<div class="sidebar-body flex flex-col">
    <div class="sidebar-head flex items-center w-[220px] h-[50px] gap-4 ">
        <div class="sidebar-logo flex items-center ">
            <img src="../../assets/img/darkblue.webp"  :style="{width:isSidebarOpen?'40px':'54.4px'}" style="border-radius: 10px;">
        </div>
        <div v-if="isSidebarOpen" class="sidebar-title text-2xl whitespace-nowrap">
            FIBER-TECH
        </div>
    </div>
    <div class="sidebar-menu py-2">
        <div class="sidebar-menu-body flex flex-col overflow-hidden gap-2">
            <NuxtLink v-for="(item, index) in menuList" :key="index" :to="item.link" class="sidebar-menu-item flex gap-2 py-4 px-3 items-center">
                <div class="item-logo flex items-center">
                    <Icon :name="item.icon" size="30px" />
                </div>
                <div v-if="isSidebarOpen" class="item-title">
                    <span>{{ item.title }}</span>
                </div>
            </NuxtLink>
        </div>
    </div>
</div>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';
import type {topBarMenu} from '~/types/sidebar';
const props = defineProps({
  isSidebarOpen: {
    default: false
  },
})

const menuList : Array<topBarMenu> = [{
    icon: 'ri:dashboard-horizontal-fill',
    title: 'Cabinet',
    link: '/cabinet',
    num: 1
},{
    icon: 'material-symbols:view-compact-alt-outline',
    title: 'Catalog',
    link: '/catalog',
    num: 2
},{
    icon: 'mdi:chat-processing-outline',
    title: 'Chat',
    link: '/communication',
    num: 3
}]
</script>

<style scoped>

.sidebar-menu-item{
    border: 1px solid #f8f8f8;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
}

.sidebar-menu-item:hover {
    background-color: #f8f8f8;
}

.sidebar-menu-item:hover .item-title {
    color: black;
}



.sidebar-menu-item:hover .item-logo {
    color: var(--plcolor-accent);
}


.sidebar-title {
    color: var(--plcolor-accent);
    font-weight: bold;
    font-size: 25px;
}

.sidebar-logo {
    transition: all 0.6s ease;
}

.sidebar-logo img{
    transition: all 0.5s ease;
}

.sidebar-body{
    color: #808080;
    gap: 1rem;
}


</style>