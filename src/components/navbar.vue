<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <form action="/">
        <button class="btn btn-outline-success" type="submit"> Retour </button>
        <router-link to='/'></router-link>
 </form>
       <form action="/panier">
        <button class="btn btn-outline-success" type="submit">Panier => </button>
        <router-link to='/panier'></router-link>
 </form>
 </div>
</nav>
</template>
<script>
export default {
  name: 'navbar',
 
}
</script>

<style>

</style>