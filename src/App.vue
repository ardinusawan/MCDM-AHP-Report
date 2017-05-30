<template>
  <div id="app">
    <server-stats></server-stats>
    <router-view></router-view>
  </div>
</template>


<script>

  import ServerStats from './components/ServerStats.vue';
  import Result from './components/Result.vue';

  export default {
    name: 'app',

    components: {
        ServerStats,
        Result
    },

    data () {
      return {

      }
    }
}
</script>

<style>

</style>
