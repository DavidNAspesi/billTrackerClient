<template>
  <div class="seeBills">
    <div class="container jumbotron" v-for="bill in bills" :key="bill.id">
      <h3>Type of bill: {{bill.type}}</h3>
      <h3>Amount owed: ${{bill.amount}}</h3>
      <p>Bill is due by: {{bill.due_date}}</p>
      <button class="btn btn-danger" v-on:click="deleteBill(bill.id)">Delete this bill</button>
      <button class="btn btn-primary" @click="showForm = !showForm">Update this bill</button>
        <form v-if="showForm" class="jumbotron" @submit.prevent="changeBill">
          <div class="form-group">
            <label for="type">Type of bill</label>
            <input id="type" class="form-control" v-model="bill.type">
          </div>
          <div class="form-group">
            <label for="amount">How much is due?</label>
            <input id="amount" class="form-control" v-model="bill.amount">
          </div>
          <div class="form-group">
            <label for="dueDate">When is it due?</label>
            <input id="dueDate" class="form-control" v-model="bill.due_date">
          </div>
            <input type="submit" value="Update Bill" class="btn btn-success"/> 
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seeBills',
  props: ["bills", "load", "getId"],
  data:() => ({
        showForm: false,
        bill: {
            type: "",
            amount: "",
            due_date: ""
        }
    }),
  methods: {
    deleteBill(id) {
      fetch("https://bill-tracker-server.herokuapp.com/bills/" + id,{method: "DELETE"})
      .then(this.load)
    },
    changeBill(id) {
      fetch("https://bill-tracker-server.herokuapp.com/bills/" + id, {
        method: "PUT",
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({
          user_id: this.getId(),
          type: this.bill.type,
          amount: this.bill.amount,
          due_date: this.bill.due_date
        })
      })
      .then(res => console.log(res))
      .then(this.bill = {
        type: "",
        amount: "",
        due_date: "",
      },
      this.showForm = false)
      .then(this.load)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
