<template>
    <div class="addBill">
        <button @click="showForm = !showForm" type="button" class="btn btn-primary">Add a bill</button>
        <form v-if="showForm" class="jumbotron" @submit="postBill">
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
                <input type="submit" value="Add Bill" class="btn btn-success"/> 
        </form>
    </div>
</template>

<script>
export default {
    name: "addBill",
    props: ["getId", "load"],
    data:() => ({
        showForm: false,
        bill: {
            type: "",
            amount: "",
            due_date: ""
        }
    }),
    methods: {
      postBill() {
        fetch("https://bill-tracker-server.herokuapp.com/bills/", {
          method: "POST",
          headers: new Headers({"Content-Type": "application/json"}),
          body: JSON.stringify({
            user_id: this.getId(),
            type: this.bill.type,
            amount: this.bill.amount,
            due_date: this.bill.due_date
          })
        })
        .then(res => res.json())
        .then(this.bill = {
            type: "",
            amount: "",
            due_date: "",
        },
        this.showForm = false)
        .then(this.load)
      },
    },
}
</script>

<style lang="scss" scoped>

</style>
