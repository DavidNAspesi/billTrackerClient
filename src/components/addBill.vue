<template>
    <div class="addBill">
        <button @click="showForm = !showForm" type="button" class="btn btn-primary">Add a bill</button>
        <form v-if="showForm" class="jumbotron" @submit.prevent="onAddBill">
            <div class="form-group">
                <label for="type">Type of bill</label>
                <input v-model="bill.type" id="type" class="form-control">
            </div>
            <div class="form-group">
                <label for="amount">How much is due?</label>
                <input v-model="bill.amount" id="amount" class="form-control">
            </div>
            <div class="form-group">
                <label for="dueDate">When is it due?</label>
                <input v-model="bill.due_date" id="dueDate" class="form-control">
            </div>
                <input type="submit" value="Add Bill" class="btn btn-success"/> 
        </form>
    </div>
</template>

<script>
function addBill() {
    return {
        user_id: "",
        type: "",
        amount: "",
        due_date: ""
    }
}

export default {
    name: "addBill",
    props: ["addBill"],
    data:() => ({
        showForm: false,
    }),
    methods: {
        onAddBill() {

        }
    },
}
</script>

<style lang="scss" scoped>

</style>
