<template>
  <div class="billPage">
    <h1>This will be the bill page</h1>
    <seeBills class="container" :bills="bills"></seeBills>
    <addBill :addBill="addBill" class="container"></addBill>
    <billChart class="container"></billChart>
    <router-link :to="{name: 'signIn'}">Go back to the sign in page</router-link>
  </div>
</template>

<script>
import seeBills from "@/components/seeBills"
import addBill from "@/components/addBill"
import billChart from "@/components/billChart"

export default {
    components: {
      seeBills,
      addBill,
      billChart
    },
    data() {
      return {
        bills: []
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      load() {
        fetch(`https://bill-tracker-server.herokuapp.com/bills/${this.getId()}`)
          .then(res => res.json())
          .then(bills => this.bills = bills.bills)
      },
      getId() {
        const path = window.location.href.split("/")
        return path[path.length -1]
      },
      addBill(bill) {
        fetch("https://bill-tracker-server.herokuapp.com/bills/", {
          method: "POST",
          headers: new Headers({"Content-Type": "application/json"}),
          body: JSON.stringify({bill})
        })
      },
    }
}
</script>

<style lang="scss" scoped>

</style>
