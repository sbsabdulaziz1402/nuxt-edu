<template>
    <div>
        <h1>
            Product body
        </h1>
        <h2>
            {{ productId }}
        </h2>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

const productId = route.params.id

</script>

<style scoped>
</style>