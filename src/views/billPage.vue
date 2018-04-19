<template>
  <div class="billPage">
    <h1>This will be the bill page</h1>
    <seeBills class="container"></seeBills>
    <addBill class="container"></addBill>
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
    }
}
</script>

<style lang="scss" scoped>

</style>
