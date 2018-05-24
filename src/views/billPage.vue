<template>
  <div class="billPage">
    <seeBills class="container" :bill="bill" :deleteBill="deleteBill" :changeBill="changeBill" v-for="bill in bills" :key="bill.id"></seeBills>
    <addBill class="container" :postBill="postBill"></addBill>
    <billChart class="container" :billData="billData" :billLabels="billLabels" :clearChartData="clearChartData" :loadChartData="loadChartData"></billChart>
      <div class="routerLink">
        <router-link :to="{name: 'signIn'}" class="btn btn-danger">Go back to the sign in page</router-link>
      </div>
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
        bills: [],
        billData: [],
        billLabels: []
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
          this.loadChartData()
      },
      loadChartData() {
        fetch(`https://bill-tracker-server.herokuapp.com/bills/${this.getId()}`)
          .then(res => res.json())
          .then(bills => bills.bills.forEach(bill => {
            this.billData.unshift(bill.amount)
            this.billLabels.unshift(bill.due_date)
          }))
      },
      getId() {
        const path = window.location.href.split("/")
        return path[path.length -1]
      },
      postBill(body) {
        fetch("https://bill-tracker-server.herokuapp.com/bills/", {
          method: "POST",
          headers: new Headers({"Content-Type": "application/json"}),
          body: JSON.stringify({
            user_id: this.getId(),
            type: body.type,
            amount: body.amount,
            due_date: body.due_date
          })
        })
        .then(this.load)
      },
      deleteBill(id) {
        fetch("https://bill-tracker-server.herokuapp.com/bills/" + id, {method: "DELETE"})
        .then(this.load)
      },
      changeBill(id, body) {
        fetch("https://bill-tracker-server.herokuapp.com/bills/" + id, {
          method: "PUT",
          headers: new Headers({"Content-Type": "application/json"}),
          body: JSON.stringify({
            user_id: this.getId(),
            type: body.type,
            amount: body.amount,
            due_date: body.due_date
          })
        })
        .then(this.load)
      },
      clearChartData() {
        this.billLabels = []
        this.billData = []
      }
    }
}
</script>

<style lang="scss" scoped>
.routerLink {
  display: flex;
  justify-content: center;
}
</style>
