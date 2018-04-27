<template>
  <div class="seeBills">
    <div class="container jumbotron" v-for="bill in bills" :key="bill.type">
      <h3>Type of bill: {{bill.type}}</h3>
      <h3>Amount owed: ${{bill.amount}}</h3>
      <p>Bill is due by: {{bill.due_date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seeBills',
  props: ["bills"]
  
}
</script>

<style scoped lang="scss">

</style>
