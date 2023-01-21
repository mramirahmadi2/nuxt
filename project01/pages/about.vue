<template>
    <div>
      <h2>about</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate beatae voluptas animi rem doloribus, nemo molestias voluptates minima voluptatem! Neque.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, natus?</p>
     
    <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/ninja?name=mario')
  //  async const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: {age: 30}
  // })
</script>

<style  scoped>
  h2{
    margin-bottom: 20px;
    
  }
</style>