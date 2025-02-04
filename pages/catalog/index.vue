<template>
    <div>
        <h1>Product Catalog</h1>
        <ul>
            <li v-for="(item, index) in products" :key="index">
                <NuxtLink :to="`/catalog/${item.id}`">
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";


// const { $db } = useNuxtApp();
const products = ref();

// onMounted(async () => {
//   try {
//     const querySnapshot = await getDocs(collection($db, "products"));
//     products.value = querySnapshot.docs.map(doc => (doc.data()));
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//   }
// });
</script>

<style scoped>
</style>