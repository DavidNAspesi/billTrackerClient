<template>
    <div class="addBill">
        <button @click="showForm = !showForm" type="button" class="btn btn-primary">Add a bill</button>
        <form v-if="showForm" class="jumbotron" @submit="sendToPostBill(newBill)">
            <div class="form-group">
                <label for="type">Type of bill</label>
                <input id="type" class="form-control" v-model="newBill.type">
            </div>
            <div class="form-group">
                <label for="amount">How much is due?</label>
                <input id="amount" class="form-control" v-model="newBill.amount">
            </div>
            <div class="form-group">
                <label for="dueDate">When is it due?</label>
                <input id="dueDate" class="form-control" v-model="newBill.due_date">
            </div>
                <input type="submit" value="Add Bill" class="btn btn-success"/> 
        </form>
    </div>
</template>

<script>
function getNewBill() {
    return {
        type: "",
        amount: "",
        due_date: ""
    }
}

export default {
    name: "addBill",
    props: [
        "postBill"
    ],
    data:() => ({
        showForm: false,
        newBill: getNewBill()
    }),
    methods: {
        sendToPostBill(bill) {
            this.postBill(bill)
            this.showForm = false
            this.newBill = getNewBill()
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
