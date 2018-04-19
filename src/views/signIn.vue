<template>
  <div class="signIn">
    <header>
      <img src="../assets/business.png" alt="bill">
      <h1>Bill Tracker</h1>
    </header>
    <main class="container">
      <p>Select User</p>
      <select>
        <option></option>
      </select>
      <p><router-link :to="{name: 'billPage'}">Go to the App!</router-link></p>
    </main>
  </div>
</template>

<script>

export default {
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
    max-height: 200px;
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
