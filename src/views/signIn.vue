<template>
  <div class="signIn">
    <header>
      <img src="../assets/business.png" alt="bill">
      <h1>Bill Tracker</h1>
    </header>
    <main class="form-group container">
      <p>Select User</p>
      <select v-model="selected" class="form-control">
        <option>Select a User</option>
        <option v-for="customer in customers" :key="customer.id" v-bind:value="customer.id">{{customer.name}}</option>
      </select>
        <div class="form-group">
          <button class="btn btn-primary" @click="showForm = !showForm">Add a User</button>
            <form class="buttonDiv form-group" v-if="showForm" @submit="addCustomer">
              <label for="name" class="col-form-label">Enter your name</label>
              <input id="name" v-model="name.name">
              <input type="submit" class="btn btn-success">
            </form>
        </div>
      <p><router-link :to="{ name: 'billPage', params: { id: selected }}" class="btn btn-success">Go to the App!</router-link></p>
    </main>
  </div>
</template>

<script>
function getNewUser() {
  return {
    name: ""
  }
}

export default {
  data:() => ({
    selected: "",
    customers: [],
    showForm: false,
    name: getNewUser()
  }),
  mounted() {
    this.load()
  },
  methods: {
    load() {
      fetch("https://bill-tracker-server.herokuapp.com/customers")
        .then(res => res.json())
        // .then(customers => console.log(customers.customers))
        .then(customers => this.customers = customers.customers)
    },
    addCustomer() {
      fetch("https://bill-tracker-server.herokuapp.com/customers", {
        method: "POST",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({
          name: this.name.name
        })
      })
      .then(this.load)
      this.showForm = false
      this.name = getNewUser()
    }
    
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
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
}


</style>
