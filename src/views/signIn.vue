<template>
  <div class="signIn">
    <header>
      <img src="../assets/business.png" alt="bill">
      <h1>Bill Tracker</h1>
    </header>
    <main>
      <p>The future home of the Bill Tracker</p>
      <p><router-link to="/billPage">Go to the App!</router-link></p>
    </main>
  </div>
</template>

<script>

export default {
  name: 'signIn',
  components: {
  }
}
</script>

<style lang="scss" scoped>
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    width: 50%;
}
h1 {
  font-size: 300%;
  margin: 20px;
  text-align: center;
}

p {
  margin: 10px;
  text-align: center;
}
</style>
