<template>
  <div id="app">
  <!--<message> Hello There </message>-->
    <message></message>
  </div>
</template>

<!--<script src="https://www.gstatic.com/charts/loader.js"></script>-->

<script>

  import Message from './components/Message.vue';

export default {
  name: 'app',

  components: { Message },

  data () {
    return {

    }
  }
}
</script>

<style>

</style>
