<template>
    <div class="front-page">
      <h1>Canvax</h1>
      <button @click="$router.push('tabs/tab1')">View Schedule</button>
      <button>My Notes</button>
    </div>
  </template>
  
  <style scoped>
  .front-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000000;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #ffffff;
  }
  
  button {
    font-size: 1.4rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #007bff;
    color: #ffffff;
    margin-bottom: 2rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  