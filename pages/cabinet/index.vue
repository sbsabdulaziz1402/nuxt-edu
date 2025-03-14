<template>
    <div>
        <h1>Cabinet Page</h1>
        <p>Welcome to the cabinet page!</p>
    </div>
</template>

<script>
export default {
    name: 'CabinetPage'
}
</script>

<style scoped>
h1 {
    color: #333;
  animation: fadeIn 2s ease-in-out;
  animation-delay: 1s;
  /* animation-duration: 2s; */
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.box {
  animation: fadeIn 2s ease-in-out;
}
</style>