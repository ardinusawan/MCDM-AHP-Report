<template>
  <div>
  <!--<ul v-if="posts && posts.length">-->
    <!--<li v-for="post in posts">-->
      <!--<p><strong>{{post.title}}</strong></p>-->
      <!--<p>{{post.body}}</p>-->
    <!--</li>-->
  <!--</ul>-->
    <div class="container">
      CPU
      <area-chart :data="cpu_stats"></area-chart>
      Memory
      <area-chart :data="memory_stats"></area-chart>
    </div>
  <ul v-if="errors && errors.length">
    <li v-for="error in errors">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>
  function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }

  import axios from 'axios';
  var moment = require('moment');

  export default {
    data: () => ({
      cpu_stats: {},
      memory_stats: {},
      errors: [],
    }),
    created() {
      axios.get(`http://localhost:5000/server-stats`)
        .then(response => {
          for(var i=0;i<response.data.length;i++){
            var dateObj = new Date(response.data[i]["timestamps"]);
            var momentObj = moment(dateObj);
            var tmp = clone(this.cpu_stats);
            var tmp2 = clone(this.memory_stats);
            tmp[momentObj.format('YYYY-MM-DD hh:mm:ss')]=response.data[i]["cpu"];
            tmp2[momentObj.format('YYYY-MM-DD hh:mm:ss')]=response.data[i]["memory"];
            this.cpu_stats = tmp;
            this.memory_stats = tmp2;
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

  }
</script>
