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
        <option v-for="customer in customers" :key="customer.id">{{customer.name}}</option>
      </select>
      <p><router-link :to="{ name: 'billPage', params: { id: 2 }}">Go to the App!</router-link></p>
    </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      customers: [],
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      fetch("https://bill-tracker-server.herokuapp.com/customers")
        .then(res => res.json())
        .then(customers => this.customers = customers.customers)
    },
    
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
