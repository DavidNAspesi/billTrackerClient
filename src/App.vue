<template>
  <div id="app">
    <the-header></the-header>
    <router-view/>
  </div>
</template>

<script>
import signIn from "@/views/signIn"
import billPage from "@/views/billPage"
import theHeader from "@/components/theHeader"

export default {
  components: {
    signIn,
    billPage,
    theHeader
  }
}
</script>


<style lang="scss">
html {
  font-family: "Roboto Condensed", sans-serif;
}
</style>
