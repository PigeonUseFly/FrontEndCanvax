<template>
    <div class="front-page">
      <h1>Canvax</h1>
      <button @click="$router.push('/tabs/tab1')">View Schedule</button>
      <button>Other Button</button>
    </div>
  </template>
<style scoped>
.front-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

button {
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #007bff;
  color: #fff;
  margin-bottom: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0069d9;
}
</style>
