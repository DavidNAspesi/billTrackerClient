<template>
    <div class="addBill">
        <button @click="showForm = !showForm" type="button" class="btn btn-primary">Add a bill</button>
        <form v-if="showForm">
            <div class="form-group">
                <label for="type">Type of bill</label>
                <input id="type" class="form-control">
            </div>
            <div class="form-group">
                <label for="amount">How much is due?</label>
                <input id="amount" class="form-control">
            </div>
            <div class="form-group">
                <label for="dueDate">When is it due?</label>
                <input id="dueDate" class="form-control">
            </div>
            <div class="form-group">
                <p>Have you paid this bill yet?</p>
                <input type="radio" id="yes"
                name="paid" value="true">
                <label for="yes">Yes</label>
                <input type="radio" id="no"
                name="paid" value="false">
                <label for="no">No</label>
                <input type="submit" value="Add Bill" class="btn btn-danger"/> 
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "addBill",
    data:() => ({
        showForm: false
    })
}
</script>

<style lang="scss" scoped>

</style>
