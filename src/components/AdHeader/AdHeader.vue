<template>
  <div class="header">
    <img @click="toHome" width="50px" src="../../assets/img/logo-umpa-loompa.png" alt="umpaloompa">
    <span class="title-header">Oompa Loompa's Crew</span>
  </div>
</template>

<script>
export default {
  name: 'AdHeader',
  data () {
    return {}
  },
  methods: {
    toHome () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./AdHeader.css"></style>
