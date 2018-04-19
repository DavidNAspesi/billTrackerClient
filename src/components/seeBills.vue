<template>
  <div class="seeBills">
    <div class="container billBox" v-for="bill in bills" :key="bill.type">
      <h1>{{bill.type}}</h1>
      <h2>{{bill.amount}}</h2>
      <p>Bill is due {{bill.due_date}}</p>
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
